import React from 'react'
import styles from './ListItem.module.css'
import { Button } from './Button'

export const ListItem = ({ name, price }) => {
  return (
    <li className={styles.listItem}>
        <p>{name}</p>
        <div className={styles.listItemContainer}>
          <p>{`${price ? price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',') : 'N/A'}$`}</p>
          <Button text='Paid' size='small' />
        </div>
    </li>
  )
}
