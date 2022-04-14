import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Link to='/toggle'>Toggle</Link>
      <Link to='/tab'>Tab</Link>
      <Link to='/slider'>Slider</Link>
      <Link to='/input'>Input</Link>
      <Link to='/dropdown'>Dropdown</Link>
    </div>
  );
}

export default App;
