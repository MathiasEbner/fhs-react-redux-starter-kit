import React from 'react'
import styles from './SelectInput.module.css'

export const SelectInput = ({ name }) => {
  const users = [
    { name: 'Mathias', id: '1' },
    { name: 'Lukas', id: '2' },
    { name: 'Simon', id: '3' }
  ]

  return (
      <div className={styles.inputField}>
        <label htmlFor={name}>{name}</label>
        <select type='select' name={name} required>
        <option selected disabled hidden>Select</option>
        {
          users.map((user) =>
            <option key={user.id}>{user.name}</option>
          )
        }
        </select>
      </div>
  )
}
