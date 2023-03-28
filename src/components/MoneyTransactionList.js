import React from 'react'
import styles from './MoneyTransactionList.module.css'
import { ListItem } from './common/ListItem'

export const MoneyTransactionList = ({ transactions, users }) => {
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
