import React, { useState } from 'react'
import styles from './Toggle.module.css'
import CenterContainer from '../CenterContainer/CenterContainer'

function Toggle() {
  const [defaultButtonState, setDefalutButtonState] = useState<boolean>(true)

  const buttonToggleHandler = (toggle: boolean): void => {
    setDefalutButtonState(toggle)
  }

  return (
    <CenterContainer>
      <div className={styles.buttonContainer}>
        <button
          type='submit'
          onClick={() => buttonToggleHandler(true)}
          className={`${styles.button} ${defaultButtonState && styles.buttonFocus}`}
        >
          <span>기본</span>
        </button>

        <div
          className={styles.focusBackground}
          style={{
            transform: `translate(${defaultButtonState ? 2 : 98}%, -50%)`,
          }}
        />

        <button
          type='submit'
          onClick={() => buttonToggleHandler(false)}
          className={`${styles.button} ${!defaultButtonState && styles.buttonFocus}`}
        >
          <span>상세</span>
        </button>
      </div>
    </CenterContainer>
  )
}

export default Toggle
