import * as React from 'react';
import { useMemo } from 'react';
import proverb from './proverb';
import useDate from './useDate';
import useLevel from './useLevel';
import Quiz from './Quiz';
// import Card from './Card';
import { seedshuffle, getSymbol } from '../../helpers/util';
import styles from './DailyQuiz.module.scss';

const proverbs = Object.entries(proverb);

function DailyQuiz(props: any) {
  const [ymd, DateSelect] = useDate();
  const _proverbs = useMemo(() => {
    return seedshuffle(proverbs, `${ymd}_daily`)
      .slice(0, 10)
      .map(([text, hint]: any) => {
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

  const [level, LevelDropdown] = useLevel();

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>오늘의 초성퀴즈</h1>
      <div className={styles.options}>
        <DateSelect />
        <LevelDropdown />
      </div>
      <hr />
      <ul key={ymd}>
        {_proverbs.map((e, i) => (
          <li key={i}>
            <Quiz {...e} level={level} no={i + 1} />
          </li>
        ))}
      </ul>
      <p>
        출처:&nbsp;
        <a href="https://ko.wikiquote.org/wiki/%ED%95%9C%EA%B5%AD_%EC%86%8D%EB%8B%B4">
          한국 속담 - 위키인용집
        </a>
      </p>
    </div>
  );
}

export default DailyQuiz;
