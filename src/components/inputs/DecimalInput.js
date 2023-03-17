import React from 'react'
import styles from './DecimalInput.module.css'

export const DecimalInput = ({ name }) => {
  return (
      <div className={styles.inputField}>
        <label htmlFor={name}>{name}</label>
        <input type='number' name={name} step='any' min='0' required/>
      </div>
  )
}
