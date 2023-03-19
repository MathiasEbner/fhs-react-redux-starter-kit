import React from 'react'
import styles from './InputSwitch.module.css'

export const InputSwitch = ({ text, id, onChange }) => {
  return (
  <div>
    <input className={styles} type="radio" id={id} onChange={onChange} value={text} name="pay" />
    <label className={styles.switchLabel} htmlFor={id}>
    {text}</label>
  </div>

  )
}
