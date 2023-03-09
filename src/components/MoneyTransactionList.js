import React from 'react'
import styles from './MoneyTransactionList.module.css'
import { ListItem } from './ListItem'

export const MoneyTransactionList = () => {
  const transactions = [
    { name: 'Mathias', price: 10.40, id: 1 },
    { name: 'Lukas', price: 10.40, id: 2 },
    { name: 'Simon', price: 10.40, id: 3 }
  ]

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
