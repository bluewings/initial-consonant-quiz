import React, { useCallback, useMemo } from 'react';
import { Menu, Dropdown } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { get } from 'lodash-es';
import { useSelector, useDispatch } from 'react-redux';
import { setLevel } from '../../store/app.store';
import styles from './useDate.module.scss';

const steps = Object.entries({
  '매우 쉬움': 0.6,
  쉬움: 0.45,
  보통: 0.3,
  어려움: 0.2,
  '매우 어려움': 0.1,
}).map(([name, value]: any) => {
  return {
    name,
    value,
  };
});

function useDifficulty() {
  const level_ = useSelector((state: any) => get(state, ['app', 'level']));

  const dispatch = useDispatch();

  const difficulty = useMemo(() => {
    return (
      steps.find(({ value }: any) => {
        return value === level_;
      }) || steps[2]
    );
  }, [level_]);

  // const [dif_ficulty, setDifficulty] = useState<any>(steps[2]);

  const handleMenuClick = useCallback(
    (e: ClickParam) => {
      console.log(e.key);
      // console.
      const level = Number(e.key);
      console.log(level);
      dispatch(setLevel(level));
      // setDifficulty(steps.find((f) => f.name === e.key));
    },
    [dispatch],
  );

  const menu = (
    <Menu onClick={handleMenuClick}>
      {steps.map((e: any) => {
        return <Menu.Item key={e.value}>{e.name}</Menu.Item>;
      })}
    </Menu>
  );
  const Difficulty: any = useMemo(() => {
    return () => {
      return (
        <div className={styles.root}>
          {/* <h1>{level_}</h1> */}
          <Dropdown overlay={menu} trigger={['click']}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {difficulty.name}
            </a>
          </Dropdown>
        </div>
      );
    };
  }, [difficulty, menu]);

  return [difficulty.value, Difficulty];
}

export default useDifficulty;
