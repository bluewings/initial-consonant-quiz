import React, { useMemo, useState } from 'react';
import { Radio, Slider, Button, Switch, Menu, Dropdown } from 'antd';
import { ClickParam } from 'antd/lib/menu';

const steps = Object.entries({
  '매우 쉬움': 0.6,
  쉬움: 0.45,
  보통: 0.3,
  어려움: 0.2,
  '매우 어려움': 0.1,
  정답: 1,
}).map(([name, value]: any) => {
  return {
    name,
    value,
  };
});

function useDifficulty() {
  const [difficulty, setDifficulty] = useState<any>(steps[2]);

  const handleMenuClick = (e: ClickParam) => {
    // console.log(e.key)

    setDifficulty(steps.find((f) => f.name === e.key));
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {steps.map((e: any) => {
        return <Menu.Item key={e.name}>{e.name}</Menu.Item>;
      })}
    </Menu>
  );
  const Difficulty: any = useMemo(() => {
    return () => {
      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {difficulty.name}
          </a>
        </Dropdown>
      );
    };
  }, [difficulty, menu]);

  return [difficulty.value, Difficulty];
}

export default useDifficulty;
