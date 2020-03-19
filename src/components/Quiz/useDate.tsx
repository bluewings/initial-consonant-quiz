import React, { useMemo, useState } from 'react';
import { Radio, Slider, Button, Switch, Menu, Dropdown } from 'antd';
import { format, addDays } from 'date-fns';

const today = new Date();

function useDate() {
  const [currDate, setCurrDate] = useState(today);
  const handlePrev = () => {
    const next = addDays(currDate, -1);
    setCurrDate(next);
  };
  const handleNext = () => {
    const next = addDays(currDate, 1);
    setCurrDate(next);
  };
  const ymd = useMemo(() => {
    return format(new Date(currDate), 'yyyy-MM-dd');
  }, [currDate]);

  const Difficulty: any = useMemo(() => {
    return () => {
      return (
        <>
          <span onClick={handlePrev}>prev</span> / <span>{ymd}</span> /
          <span onClick={handleNext}>next</span>
        </>
      );
    };
  }, [ymd, handlePrev, handleNext]);

  return [currDate, Difficulty];
}

export default useDate;
