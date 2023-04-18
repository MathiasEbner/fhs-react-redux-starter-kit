import React from 'react'
import styles from './MoneyTransaction.module.css'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
import { MoneyTransactionList } from './MoneyTransactionList'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

export const MoneyTransaction = () => {
  const [user] = useAuthState(auth)
  const signedIn = Boolean(user)
  const navigate = useNavigate()

  if (!signedIn) {
    navigate('/sign-in')
    return null
  }
  return (
    <main className={styles.container}>
      <MoneyTransactionCreate />
      <MoneyTransactionList />
    </main>
  )
}
