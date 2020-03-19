import React, { useMemo, useState } from 'react';
import { format, addDays, differenceInDays, startOfDay } from 'date-fns';
import styles from './useDate.module.scss';

const startOfThis = startOfDay(new Date('2020-03-19'));
const today = startOfDay(new Date());

const dateFormat = (date: any) => format(new Date(date), 'M월 d일');

function useDate() {
  const [date, setDate] = useState(today);

  const dateStr = useMemo(() => dateFormat(date), [date]);

  const Difficulty: any = useMemo(() => {
    const prev = addDays(date, -1);
    const next = addDays(date, 1);
    const showPrev = differenceInDays(prev, startOfThis) >= 0;
    const showNext = differenceInDays(today, next) >= 0;
    const toPrev = (e: any) => {
      e.preventDefault();
      setDate(prev);
    };
    const toNext = (e: any) => {
      e.preventDefault();
      setDate(next);
    };
    return () => (
      <div className={styles.root}>
        {showPrev && (
          <>
            <a href="" onClick={toPrev}>
              이전
            </a>
            &nbsp;•&nbsp;
          </>
        )}
        {dateStr}
        {showNext && (
          <>
            &nbsp;•&nbsp;
            <a href="" onClick={toNext}>
              다음
            </a>
          </>
        )}
      </div>
    );
  }, [dateStr, date, setDate]);

  return [dateStr, Difficulty];
}

export default useDate;
