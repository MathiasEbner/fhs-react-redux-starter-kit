import React from 'react'
import styles from './UserSignIn.module.css'
import { TextInput } from './inputs/TextInput'
import { ButtonInput } from './inputs/ButtonInput'
import { CustomLink } from './inputs/CustomLink'
import { useFormik } from 'formik'
import { auth } from '../firebase'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

export const UserSignIn = () => {
  const [signIn] = useSignInWithEmailAndPassword(auth)

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => await signIn(values.email, values.password)
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container} >
      <TextInput type='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      <TextInput type='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
      <ButtonInput text='Sign In' size='large' />
      <CustomLink text='Sign Up' path='/sign-up'/>
    </form>
  )
}
