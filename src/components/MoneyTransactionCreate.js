import React from 'react'
import styles from './MoneyTransactionCreate.module.css'
import { SelectInput } from './SelectInput'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import { Link } from './Link'

export const MoneyTransactionCreate = ({ users }) => {
  return (
    <div className={styles.container}>
      <div className={styles.rowHeader}>
        <p>I owe Somebody</p>
        <p>Somebody owes me</p>
        <Link text='I owe Somebody' path='#'/>
      </div>
      <div className={styles.row}>
        <SelectInput name='User' users={users} />
        <DecimalInput name='Amount'/>
        <Button text='Create' size='small'/>
      </div>

    </div>
  )
}
