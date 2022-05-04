import React from 'react'
import { Link } from 'react-router-dom'
import styles from './App.module.css'
import Dropdown from './components/Dropdown/Dropdown'
import Input from './components/Input/Input'
import Slider from './components/Slider/Slider'
import Tab from './components/Tab/Tab'
import Toggle from './components/Toggle/Toggle'

function App() {
  return (
    <div className={styles.container}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  )
}

export default App
