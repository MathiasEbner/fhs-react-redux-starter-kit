import React from 'react'
import styles from './UserSignUp.module.css'
import { TextInput } from './inputs/TextInput'
import { ButtonInput } from './inputs/ButtonInput'
import { CustomLink } from './inputs/CustomLink'
import { useFormik } from 'formik'
import { auth } from '../firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

export const UserSignUp = () => {
  const [signUp] = useCreateUserWithEmailAndPassword(auth)

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => await signUp(values.email, values.password)
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <TextInput type='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      <TextInput type='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
      <ButtonInput text='Sign up' size='large' />
      <CustomLink text='Sign In' path='/sign-in'/>
    </form>
  )
}
