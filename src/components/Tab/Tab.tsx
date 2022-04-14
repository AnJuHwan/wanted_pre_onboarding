import React, { useState } from 'react';
import styles from './Tab.module.css';
import CenterContainer from '../CenterContainer/CenterContainer';

const Tab = () => {
  const [selectTabBar, setSelectTabBar] = useState<string>('');

  const focusedItem = `${styles.tabBarItem} ${styles.focusedTabBarItem}`;
  const tabBarItem = `${styles.tabBarItem}`;

  const tabBarSelect = () => {
    if (selectTabBar === '감자') {
      return 0;
    } else if (selectTabBar === '고구마') {
      return 100;
    } else {
      return 200;
    }
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
          <div
            className={selectTabBar === '감자' ? focusedItem : tabBarItem}
            onClick={() => {
              setSelectTabBar('감자');
            }}>
            <span>감자</span>
          </div>
          <div
            className={selectTabBar === '고구마' ? focusedItem : tabBarItem}
            onClick={() => {
              setSelectTabBar('고구마');
            }}>
            <span>고구마</span>
          </div>
          <div
            className={selectTabBar === '카레라이스' ? focusedItem : tabBarItem}
            onClick={() => {
              setSelectTabBar('카레라이스');
            }}>
            <span>카레라이스</span>
          </div>
        </div>
        <div className={styles.content}>
          <span>{selectTabBar}</span>
        </div>
      </div>
    </CenterContainer>
  );
};

export default Tab;

// 리팩토링 할 예정
