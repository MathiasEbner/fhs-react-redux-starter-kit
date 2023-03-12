import React from 'react'
import styles from './SelectOption.module.css'

export const SelectOption = ({ text }) => {
  return (
  <h3 className={styles.link}>
    {text}
  </h3>
  )
}
