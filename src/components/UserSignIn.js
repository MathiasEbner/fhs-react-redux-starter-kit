import React from 'react'
import styles from './UserSignIn.module.css'
import { TextInput } from './TextInput'
import { ButtonInput } from './ButtonInput'
import { CustomLink } from './CustomLink'
import { useFormik } from 'formik'

export const UserSignIn = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => console.log(values)
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
