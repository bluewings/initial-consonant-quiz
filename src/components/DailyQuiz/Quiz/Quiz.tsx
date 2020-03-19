import React, { useState, useCallback } from 'react';
import Card from '../Card';
import styles from './Quiz.module.scss';

function Quiz(props: any) {
  const { chars, level } = props;
  // console.log(props);
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
        <a className={styles.show_hint} onClick={sss}>
          힌트
        </a>
      )}

      <a className={styles.answer} onClick={ddd}>
        정답 확인
      </a>
      <div className={styles.clear_both} />
    </div>
  );
}

export default Quiz;
