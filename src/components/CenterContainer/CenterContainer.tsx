import React from 'react'
import styles from './CenterContainer.module.css'

interface IProps {
  children: JSX.Element
}

function CenterContainer({ children }: IProps) {
  return <div className={styles.container}>{children}</div>
}

export default CenterContainer
