import React, { useState } from 'react';
import styles from './Tab.module.css';
import CenterContainer from '../CenterContainer/CenterContainer';

const Tab = () => {
  const tabBarData: string[] = ['감자', '고구마', '카레라이스'];
  const [selectTabBar, setSelectTabBar] = useState<string>('감자');

  const focusedItem = `${styles.tabBarItem} ${styles.focusedTabBarItem}`;
  const tabBarItem = `${styles.tabBarItem}`;

  const tabBarSelect = (): number | null => {
    if (selectTabBar === '감자') {
      return 0;
    } else if (selectTabBar === '고구마') {
      return 100;
    } else if (selectTabBar === '카레라이스') {
      return 200;
    }
    return null;
  };
  return (
    <CenterContainer>
      <div className={styles.container}>
        <div className={styles.tabBar}>
          <div
            className={styles.foucsedBar}
            style={{
              transform: `translate(${tabBarSelect()}%)`,
            }}></div>
          {tabBarData.map((data, index) => {
            return (
              <div
                key={index}
                className={selectTabBar === `${data}` ? focusedItem : tabBarItem}
                onClick={() => {
                  setSelectTabBar(data);
                }}>
                <span>{data}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.content}>
          <span>{selectTabBar}</span>
        </div>
      </div>
    </CenterContainer>
  );
};

export default Tab;
