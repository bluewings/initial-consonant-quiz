import * as React from 'react';
import cx from 'classnames';
import styles from './Card.module.scss';

function Card({ initial, char, open }: any) {
  // return f.timing <= difficulty ? (
  //   <span className={styles.card}>{f.char}</span>
  // ) : (
  //   <span className={styles.card}>{f.initial}</span>

  return (
    <div className={cx(styles.card, open && styles.open)}>
      <div className={styles.inner}>
        <div className={styles.front}>{initial}</div>
        <div className={styles.back}>{char}</div>
      </div>
    </div>
  );
}

export default Card;
