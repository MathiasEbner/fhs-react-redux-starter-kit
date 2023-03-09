import React from 'react'
import styles from './UserSignIn.module.css'
import { TextInput } from './TextInput'
import { Button } from './Button'
import { Link } from './Link'

export const UserSignIn = () => {
  return (
    <div className={styles.container}>
      <TextInput type='email' name='Email'/>
      <TextInput type='password' name='Password'/>
      <Button text='Sign In' size='large'/>
      <Link text='Sign Up' path='#'/>
    </div>
  )
}
