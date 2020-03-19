import React from 'react';
import styles from './Home.module.scss';
import Quiz from '../../components/Quiz';

export const uriPattern = '/home';

const Home: React.FC = (props: any) => {
  return (
    <div className={styles.root}>
      {/* <h1>Home</h1> */}
      <Quiz />
    </div>
  );
};

export default Home;
