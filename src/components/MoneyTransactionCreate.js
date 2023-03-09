import React from 'react'
import styles from './MoneyTransactionCreate.module.css'
import { SelectInput } from './SelectInput'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'

export const MoneyTransactionCreate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rowHeader}>
        <p>I owe Somebody</p>
        <p>Somebody owes me</p>
      </div>
      <div className={styles.row}>
        <SelectInput name='User' />
        <DecimalInput name='Amount'/>
        <Button text='Create'/>
      </div>

    </div>
  )
}
