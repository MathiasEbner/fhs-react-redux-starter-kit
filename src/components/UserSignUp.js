import React from 'react'
import styles from './UserSignUp.module.css'
import { TextInput } from './TextInput'
import { Button } from './Button'
import { Link } from './Link'

export const UserSignUp = () => {
  return (
    <div className={styles.container}>
      <TextInput type='email' name='Email'/>
      <TextInput type='password' name='Password'/>
      <Button text='Sign Up'/>
      <Link text='Sign In' path='#'/>
    </div>
  )
}
