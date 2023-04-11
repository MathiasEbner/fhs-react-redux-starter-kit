import React, { useEffect } from 'react'
import styles from './MoneyTransactionList.module.css'
import { ListItem } from './common/ListItem'
import { useUsers, useTransactions } from './globalState'
import memoize from 'memoize-one'

export const MoneyTransactionList = () => {
  const users = useUsers(memoize((state) => state.users))
  const fetchUser = useUsers(memoize((state) => state.fetchUsers))
  const transactions = useTransactions(memoize((state) => state.transactions))
  const fetchTransactions = useTransactions(memoize((state) => state.fetchTransactions))

  useEffect(() => {
    fetchUser()
    fetchTransactions()
  }, [fetchUser, fetchTransactions])

  return (
    <div className={styles.container}>
      <ul>
        {
          transactions.map((transaction) =>
            <ListItem
              creditorId={transaction.creditorId}
              debitorId={transaction.debitorId}
              amount={transaction.amount}
              paidAt={transaction.paidAt}
              users={users}
              id={transaction.id}
              key={transaction.id} />
          )
        }
      </ul>
    </div>
  )
}
