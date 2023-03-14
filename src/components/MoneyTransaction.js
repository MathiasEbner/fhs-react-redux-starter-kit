import React from 'react'
import styles from './MoneyTransaction.module.css'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
import { MoneyTransactionList } from './MoneyTransactionList'

export const MoneyTransaction = () => {
  const users = [
    { name: 'Mathias', id: '1' },
    { name: 'Lukas', id: '2' },
    { name: 'Simon', id: '3' }
  ]

  const transactions = [
    { name: 'Mathias', price: 10.40, paid: true, id: 1 },
    { name: 'Lukas', price: 10.40, paid: false, id: 2 },
    { name: 'Simon', price: 10.40, paid: true, id: 3 }
  ]

  return (
    <main className={styles.container}>
      <MoneyTransactionCreate users={users} />
      <MoneyTransactionList transactions={transactions} />
    </main>
  )
}
