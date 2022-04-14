import React from 'react';
import styles from './CenterContainer.module.css';

interface IProps {
  children: JSX.Element;
}

const CenterContainer: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CenterContainer;
