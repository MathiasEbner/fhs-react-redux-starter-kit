import React from 'react'
import styles from './MoneyTransactionList.module.css'
import { ListItem } from './ListItem'

export const MoneyTransactionList = ({ transactions }) => {
  return (
    <div className={styles.container}>
      <ul>
        {
          transactions.map((transaction) =>
            <ListItem name={transaction.name} price={transaction.price} key={transaction.id}/>
          )
        }
      </ul>
    </div>
  )
}
