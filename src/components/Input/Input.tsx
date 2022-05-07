import { faCircleCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CenterContainer from '../CenterContainer/CenterContainer'
import styles from './Input.module.scss'

function Input() {
  const [email, setEmail] = useState<string>('')
  const [emailOutFocus, setEmailOutFocus] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [passwordOpen, setPasswordOpen] = useState<boolean>(false)

  const emailError = 'Invalid e-mail address.'
  const emailRegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ // 이메일 정규 표현식
  const emailSuccess = !emailRegExp.test(email) ? styles.emailFail : styles.emailSuccess

  const successEmailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailOutFocus(false)
    setEmail(e.currentTarget.value)
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value)
  }

  return (
    <CenterContainer>
      <div className={styles.container}>
        <div className={styles.form}>
          <label htmlFor='Email'>E-mail</label>
          <input
            type='email'
            id='Email'
            value={email}
            onChange={successEmailHandler}
            onBlur={() => setEmailOutFocus(true)}
            className={styles.input}
          />
          <FontAwesomeIcon icon={faCircleCheck} className={`${styles.successEmail} ${emailSuccess}`} />
        </div>
        {emailOutFocus && <span style={{ color: 'red', fontSize: 12 }}>{!emailRegExp.test(email) && emailError}</span>}{' '}
        <div className={styles.form}>
          <label className={styles.passwordLabel} htmlFor='Password'>
            Password
          </label>
          <input
            type={`${passwordOpen ? 'text' : 'password'}`}
            value={password}
            id='Password'
            onChange={passwordHandler}
            className={styles.input}
          />
          <FontAwesomeIcon
            icon={passwordOpen ? faEye : faEyeSlash}
            className={`${styles.opnePasswordIcon} ${passwordOpen ? styles.passwordOpen : styles.passwordClose}`}
            onClick={() => setPasswordOpen(!passwordOpen)}
          />
        </div>
      </div>
    </CenterContainer>
  )
}

export default Input
