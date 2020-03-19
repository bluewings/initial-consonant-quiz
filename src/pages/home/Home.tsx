import React from 'react';
import styles from './Home.module.scss';
import DailyQuiz from '../../components/DailyQuiz';

export const uriPattern = '/home';

const Home: React.FC = (props: any) => {
  return (
    <div className={styles.root}>
      <DailyQuiz />
    </div>
  );
};

export default Home;
