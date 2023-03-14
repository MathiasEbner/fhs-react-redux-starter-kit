import React from 'react'
import styles from './UserSignIn.module.css'
import { TextInput } from './TextInput'
import { Button } from './Button'
import { CustomLink } from './CustomLink'

export const UserSignIn = () => {
  return (
    <form className={styles.container}>
      <TextInput type='email' name='Email'/>
      <TextInput type='password' name='Password'/>
      <Button text='Sign In' path='/sign-in' size='large'/>
      <CustomLink text='Sign Up' path='/sign-up'/>
    </form>
  )
}
