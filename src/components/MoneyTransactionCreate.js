import React from 'react'
import styles from './MoneyTransactionCreate.module.css'
import { SelectInput } from './inputs/SelectInput'
import { DecimalInput } from './inputs/DecimalInput'
import { Button } from './common/Button'
import { InputSwitch } from './inputs/InputSwitch'

export const MoneyTransactionCreate = ({ users }) => {
  return (
    <div className={styles.container}>
      <Button className={styles.logOut} path='/sign-in' text='Log out' size='small' />
      <div className={styles.rowHeader}>
        <InputSwitch text='I owe somebody'/>
        <InputSwitch text='Somebody owes me'/>
      </div>
      <form className={styles.inputRow}>
        <SelectInput name='User' users={users} />
        <DecimalInput name='Amount'/>
        <Button text='Create' path='#' size='small'/>
      </form>
    </div>
  )
}
