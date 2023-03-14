import React from 'react'
import styles from './MoneyTransactionCreate.module.css'
import { SelectInput } from './SelectInput'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import { SelectOption } from './SelectOption'

export const MoneyTransactionCreate = ({ users }) => {
  return (
    <div className={styles.container}>
        <Button text='Log out' size='large' />
      <div className={styles.rowHeader}>
        <SelectOption text='I owe somebody'/>
        <SelectOption text='Somebody owes me'/>
      </div>
      <div className={styles.row}>
        <SelectInput name='User' users={users} />
        <DecimalInput name='Amount'/>
        <Button text='Create' size='small'/>
      </div>

    </div>
  )
}
