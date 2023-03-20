import React, { useState } from 'react'
import styles from './ListItem.module.css'
import { Button } from './Button'

export const ListItem = ({ id, creditorId, amount, paidAt, users }) => {
  const [isPaid, setIsPaid] = useState(paidAt)

  const printPrize = (amount) => amount ? amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',') : 'N/A'

  const checkPaid = () => isPaid === null ? '' : styles.lineThrough

  const handleTransactionPaid = () => {
    console.log(`id: ${id}, paidAt: ${(new Date()).toISOString()}`)
    if (isPaid === null) {
      setIsPaid((new Date()).toISOString())
    }
  }

  return (
    <li className={styles.listItem} >
        <p className={checkPaid()}>{users.find((user) => user.id === creditorId).name}</p>
        <div className={styles.listItemContainer}>
          <p className={checkPaid()}>{`${printPrize(amount)}$`}</p>
          {
            isPaid === null ? <Button text='Paid' path='' size='small' onClick={handleTransactionPaid}/> : null
          }
        </div>
    </li>
  )
}
