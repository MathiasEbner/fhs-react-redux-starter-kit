import React from 'react'
import styles from './UserSignUp.module.css'
import { TextInput } from './TextInput'
import { Button } from './Button'
import { CustomLink } from './CustomLink'

export const UserSignUp = () => {
  return (
    <form className={styles.container}>
      <TextInput type='email' name='Email'/>
      <TextInput type='password' name='Password'/>
      <Button text='Sign Up' path='/sign-up' size='large'/>
      <CustomLink text='Sign In' path='/sign-in'/>
    </form>
  )
}
