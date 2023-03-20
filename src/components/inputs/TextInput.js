import React from 'react'
import styles from './TextInput.module.css'

export const TextInput = ({ type, name, onChange, value }) => {
  return (
      <div className={styles.inputField}>
        <label htmlFor={name}>{name}</label>
        <input type={type} name={name} onChange={onChange} value={value} />
      </div>
  )
}
