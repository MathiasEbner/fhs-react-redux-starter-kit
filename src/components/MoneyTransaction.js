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
    { id: 2, creditorId: 3, debitorId: 1, amount: 11.20, paidAt: '2000-01-01T00:00:00+01+00' }
  ]

  // const transactions = [
  //   { name: 'Mathias', price: 10.40, paid: true, id: 1 },
  //   { name: 'Lukas', price: 10.40, paid: false, id: 2 },
  //   { name: 'Simon', price: 10.40, paid: true, id: 3 }
  // ]

  return (
    <main className={styles.container}>
      <MoneyTransactionCreate transactions={transactions} users={users} />
      <MoneyTransactionList transactions={transactions} users={users}/>
    </main>
  )
}
