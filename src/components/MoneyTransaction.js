import React from 'react'
import styles from './MoneyTransaction.module.css'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
import { MoneyTransactionList } from './MoneyTransactionList'

export const MoneyTransaction = () => {
  const users = [
    { name: 'Mathias', id: 1 },
    { name: 'Lukas', id: 2 },
    { name: 'Simon', id: 3 }
  ]

  const transactions = [
    { id: 1, creditorId: 1, debitorId: 2, amount: 10.00, paidAt: null },
    { id: 2, creditorId: 3, debitorId: 1, amount: 11.20, paidAt: '2000-01-01T00:00:00+01+00' },
    { id: 3, creditorId: 2, debitorId: 3, amount: 8.40, paidAt: null }
  ]

  return (
    <main className={styles.container}>
      <MoneyTransactionCreate users={users} />
      <MoneyTransactionList transactions={transactions} users={users}/>
    </main>
  )
}
