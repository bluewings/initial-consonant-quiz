import React, { useState, useCallback } from 'react';
import Card from '../Card';
import styles from './Quiz.module.scss';

function Quiz(props: any) {
  const { no, chars, level } = props;
  const [showHint, setHint] = useState(false);
  const [showAns, setAns] = useState(false);

  const sss = useCallback(
    (e: any) => {
      e.preventDefault();
      setHint(!showHint);
    },
    [showHint, setHint],
  );

  const ddd = useCallback(
    (e: any) => {
      e.preventDefault();
      setAns(true);
    },
    [setAns],
  );

  return (
    <div className={styles.root}>
      <div className={styles.no}>{no}</div>
      <div className={styles.wrap}>
        <div className={styles.cards}>
          {chars.map((f: any, i: number) => (
            <Card key={i} {...f} open={showAns || f.timing <= level} />
          ))}
        </div>
        {showHint ? (
          <p className={styles.hint} onClick={sss}>
            {props.hint}
          </p>
        ) : (
          <button className={styles.show_hint} onClick={sss}>
            힌트
          </button>
        )}
        {!showAns && (
          <button className={styles.answer} onClick={ddd}>
            정답 확인
          </button>
        )}
        <div className={styles.clear_both} />
      </div>
    </div>
  );
}

export default Quiz;
