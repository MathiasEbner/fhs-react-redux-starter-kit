import React, { useEffect } from 'react'
import styles from './MoneyTransactionList.module.css'
import { ListItem } from './common/ListItem'
import { useUsers, useTransactions } from './globalState'

export const MoneyTransactionList = () => {
  const users = useUsers((state) => state.users)
  const fetchUser = useUsers((state) => state.fetchUsers)
  const transactions = useTransactions((state) => state.transactions)
  const fetchTransactions = useTransactions((state) => state.fetchTransactions)

  useEffect(() => {
    fetchUser()
    fetchTransactions()
  }, [])

  return (
    <div className={styles.container}>
      <ul>
        {
          transactions.map((transaction) =>
            <ListItem creditorId={transaction.creditorId} debitorId={transaction.debitorId} amount={transaction.amount} paidAt={transaction.paidAt} users={users} id={transaction.id} key={transaction.id} />
          )
        }
      </ul>
    </div>
  )
}
