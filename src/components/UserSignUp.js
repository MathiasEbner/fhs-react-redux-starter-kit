import { React, useState } from 'react'
import styles from './UserSignUp.module.css'
import { TextInput } from './inputs/TextInput'
import { ButtonInput } from './inputs/ButtonInput'
import { CustomLink } from './inputs/CustomLink'
import { useFormik } from 'formik'
import { auth } from '../firebase'
import { useCreateUserWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

export const UserSignUp = () => {
  const [signUp] = useCreateUserWithEmailAndPassword(auth)
  const [user] = useAuthState(auth)
  const [error, setError] = useState('')
  const signedIn = Boolean(user)
  const navigate = useNavigate()

  signedIn ? navigate('/money-transactions') : null

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      const user = await signUp(values.email, values.password)
      console.log(user)
      if (user === undefined) {
        setError('E-Mail already taken')
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}
      <TextInput type='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      <TextInput type='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
      <ButtonInput text='Sign up' size='large' />
      <CustomLink text='Sign In' path='/sign-in'/>
    </form>
  )
}
