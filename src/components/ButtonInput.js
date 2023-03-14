import React from 'react'
import styles from './ButtonInput.module.css'

export const ButtonInput = ({ text, size }) => {
  const sizeClassName = size === 'large' ? styles.large : styles.small
  return (
  <button type="submit" className={`${styles.button} ${sizeClassName}`}>
    {text}
  </button>
  )
}
