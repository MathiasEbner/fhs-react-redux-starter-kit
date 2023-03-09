import React from 'react'
import styles from './Button.module.css'

export const Button = ({ text }) => {
  return (
  <button className={`${styles.button} ${styles.large}`}>
    {text}
  </button>
  )
}
