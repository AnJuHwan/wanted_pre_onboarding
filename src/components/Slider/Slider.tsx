import React, { useState } from 'react';
import CenterContainer from '../CenterContainer/CenterContainer';
import styles from './Slider.module.css';
const Slider = () => {
  const persentData: number[] = [1, 25, 50, 75, 100];
  const [rangePersent, setRangePersent] = useState<number>(1);
  const rangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangePersent(Number(e.currentTarget.value));
  };

  const persentHandler = (persent: number) => {
    setRangePersent(persent);
  };

  return (
    <CenterContainer>
      <div className={styles.container}>
        <div className={styles.persentBar}>
          <span>{rangePersent === 0 ? 1 : rangePersent}</span>
          <span style={{ color: 'grey', marginLeft: 12 }}>%</span>
        </div>

        <div className={styles.progressBarContainer}>
          {persentData.map((data, index) => {
            return (
              <div
                key={index}
                className={styles.step}
                style={{
                  left: `${index === 0 ? 0 : data - 0.1}%`,
                  transform: `translateX(${-data}%)`,
                  backgroundColor: `${rangePersent >= data ? 'grey' : '#dbdbdb'}  `,
                }}
              />
            );
          })}
          <input
            className={styles.progressBar}
            type='range'
            value={rangePersent}
            min={0}
            max={100}
            onChange={rangeHandler}
          />
        </div>

        <div className={styles.selectPersentContainer}>
          {persentData.map((data, index) => {
            return (
              <div
                key={index}
                className={styles.selectPersent}
                onClick={() => persentHandler(data)}>
                <span>{data}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </CenterContainer>
  );
};

export default Slider;
