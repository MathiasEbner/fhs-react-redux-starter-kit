import React from 'react'
import styles from './MoneyTransaction.module.css'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
// import { MoneyTransactionList } from './MoneyTransactionList'

export const MoneyTransaction = () => {
  return (
    <main className={styles.container}>
      <MoneyTransactionCreate />
      {/* <MoneyTransactionList /> */}
    </main>
  )
}
