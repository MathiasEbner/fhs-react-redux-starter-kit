import React from 'react'
import styles from './MoneyTransactionCreate.module.css'
import { SelectInput } from './SelectInput'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import { SelectOption } from './SelectOption'

export const MoneyTransactionCreate = ({ users }) => {
  return (
    <div className={styles.container}>
      <Button className={styles.logOut} path='/sign-in' text='Log out' size='small' />
      <div className={styles.rowHeader}>
        <SelectOption text='I owe somebody'/>
        <SelectOption text='Somebody owes me'/>
      </div>
      <form className={styles.inputRow}>
        <SelectInput name='User' users={users} />
        <DecimalInput name='Amount'/>
        <Button text='Create' path='#' size='small'/>
      </form>
    </div>
  )
}
