import React from 'react'
import styles from './UserSignIn.module.css'
import { TextInput } from './inputs/TextInput'
import { ButtonInput } from './inputs/ButtonInput'
// import { Button } from './common/Button'
import { CustomLink } from './inputs/CustomLink'
import { useFormik } from 'formik'
import { auth } from '../firebase'
import { useSignInWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

export const UserSignIn = () => {
  const [signIn] = useSignInWithEmailAndPassword(auth)
  const [user] = useAuthState(auth)
  const signedIn = Boolean(user)
  const navigate = useNavigate()

  signedIn ? navigate('/money-transactions') : null

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => await signIn(values.email, values.password)
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container} >
      <TextInput type='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      <TextInput type='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
      <ButtonInput text='Sign In' size='large' />
      {/* <Button path='/money-transactions' text='Sign In' size='large'/> */}
      <CustomLink text='Sign Up' path='/sign-up'/>
    </form>
  )
}
