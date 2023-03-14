import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export const Button = ({ text, size }) => {
  const sizeClassName = size === 'large' ? styles.large : styles.small
  return (
  <button className={`${styles.button} ${sizeClassName}`}>
    <Link to='/sign-up'>{text}</Link>
  </button>
  )
}
