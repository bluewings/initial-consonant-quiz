import * as React from 'react';
import { useMemo, useState } from 'react';
import { format, addDays } from 'date-fns';
import { Radio, Slider, Button, Switch, Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
// import 'antd/dist/css';
import styles from './Quiz.module.scss';
import proverb from './proverb';
import { seedshuffle, getSymbol } from '../../helpers/util';
import { RadioChangeEvent } from 'antd/lib/radio';
import useDate from './useDate';
import useDifficulty from './useDifficulty';
import Card from './Card';

const proverbs = Object.entries(proverb);

function Quiz(props: any) {
  const [currDate, DateSelect] = useDate();
  const ymd = useMemo(() => {
    return format(new Date(currDate), 'yyyy-MM-dd');
  }, [currDate]);
  const _proverbs = useMemo(() => {
    return seedshuffle(proverbs, ymd)
      .slice(0, 10)
      .map(([text, hint]: any) => {
        // let _chr = text.replace(/[^ㄱ-ㅎ가-핳]+$/, '').split('');
        const chars = text
          .replace(/[^ㄱ-ㅎ가-핳]+$/, '')
          .split('')
          .map((char: any) => ({
            initial: getSymbol(char).initial,
            char,
          }))
          .filter(({ initial }: any) => initial);
        const order = seedshuffle(
          Array.from(Array(chars.length)).map((e, i) => i),
          ymd + text,
        );
        return {
          text: text.replace(/[^ㄱ-ㅎ가-핳]+$/, ''),
          hint: hint.replace(/[^ㄱ-ㅎ가-핳]+$/, ''),
          order,
          chars: chars.map((e: any, i: number) => {
            return {
              ...e,
              order: order[i],
              timing: order[i] / (chars.length - 1),
            };
          }),
        };
      });
  }, [ymd]);

  const [difficulty, DifficultyDropdown] = useDifficulty();

  return (
    <div className={styles.root}>
      <h2>
        오늘의 초성퀴즈 <small>속담</small>
      </h2>

      <hr />
      <DateSelect />
      <hr />
      <DifficultyDropdown />
      <ul>
        {_proverbs.map((e) => {
          return (
            <li>
              {e.chars.map((f: any) => {
                return <Card {...f} open={f.timing <= difficulty} />;
                // return f.timing <= difficulty ? (
                //   <span className={styles.card}>{f.char}</span>
                // ) : (
                //   <span className={styles.card}>{f.initial}</span>
                // );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Quiz;
