import React from 'react'
import styles from './DecimalInput.module.css'

export const DecimalInput = ({ name, onChange, value }) => {
  return (
      <div className={styles.inputField}>
        <label htmlFor={name}>{name}</label>
        <input onChange={onChange} value={value} type='number' name={name} step='any' min='0' required/>
      </div>
  )
}
