import React from 'react'
import styles from './ListItem.module.css'
import { Button } from './Button'
import { useTransactions } from '../globalState'

export const ListItem = ({ id, creditorId, debitorId, amount, paidAt, users }) => {
  const updateTransaction = useTransactions((state) => state.updateTransaction)

  const printPrize = () => amount ? amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',') : 'N/A'

  const checkPaid = paidAt ? styles.lineThrough : ''

  const handleTransactionPaid = async () => {
    if (paidAt === null) {
      updateTransaction(id)
    }
  }

  return (
    <li className={styles.listItem} >
        <p className={checkPaid}>{users.find((user) => user.id === creditorId).name}</p>
        <div className={styles.listItemContainer}>
          <p className={checkPaid}>{`${printPrize()}$`}</p>
          {
            paidAt === null ? <Button text='Paid' path='' size='small' onClick={handleTransactionPaid}/> : null
          }
        </div>
    </li>
  )
}
