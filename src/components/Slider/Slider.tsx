import React, { useState } from 'react';
import CenterContainer from '../CenterContainer/CenterContainer';
import styles from './Slider.module.css';
const Slider = () => {
  const [rangePersent, setRangePersent] = useState<number>(0);
  const rangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangePersent(Number(e.currentTarget.value));
  };

  return (
    <CenterContainer>
      <div className={styles.container}>
        <div className={styles.persentBar}>
          <span>{rangePersent}</span>
          <span style={{ color: 'grey' }}>%</span>
        </div>
        <div className={styles.progressBarContainer}>
          <div
            className={styles.step}
            style={{
              left: '0%',
              transform: `translateX(0%)`,
              backgroundColor: `${rangePersent >= 0 ? 'skyblue' : '#dbdbdb'}  `,
            }}
          />
          <div
            className={styles.step}
            style={{
              left: '25%',
              transform: `translateX(-25%)`,
              backgroundColor: `${rangePersent >= 25 ? 'skyblue' : '#dbdbdb'}  `,
            }}
          />
          <div
            className={styles.step}
            style={{
              left: '50%',
              transform: `translateX(-50%)`,
              backgroundColor: `${rangePersent >= 50 ? 'skyblue' : '#dbdbdb'}  `,
            }}
          />
          <div
            className={styles.step}
            style={{
              left: '75%',
              transform: `translateX(-75%)`,
              backgroundColor: `${rangePersent >= 75 ? 'skyblue' : '#dbdbdb'}  `,
            }}
          />
          <div
            className={styles.step}
            style={{
              left: '100%',
              transform: `translateX(-100%)`,
              backgroundColor: `${rangePersent >= 100 ? 'skyblue' : '#dbdbdb'}  `,
            }}
          />
          <input
            className={styles.progressBar}
            type='range'
            value={rangePersent}
            min={0}
            max={100}
            onChange={rangeHandler}></input>
        </div>
      </div>
    </CenterContainer>
  );
};

export default Slider;
