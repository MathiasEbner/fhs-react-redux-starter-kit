import React, { useState } from 'react'
import styles from './ListItem.module.css'
import { Button } from './Button'

export const ListItem = ({ name, price, paid }) => {
  const [isPaid, setIsPaid] = useState(paid)

  const printPrize = (price) => price ? price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',') : 'N/A'

  const checkPaid = () => paid ? '' : styles.lineThrough

  const handleClick = () => {
    if (isPaid) {
      setIsPaid(false)
    }
  }

  return (
    <li className={styles.listItem}>
        <p className={checkPaid()}>{name}</p>
        <div className={styles.listItemContainer}>
          <p className={checkPaid()}>{`${printPrize(price)}$`}</p>
          {
            paid ? <Button text='Paid' path='#' size='small' onClick={handleClick()}/> : null
          }
        </div>
    </li>
  )
}
