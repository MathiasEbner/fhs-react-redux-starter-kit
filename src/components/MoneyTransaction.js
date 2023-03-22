import React, { useState, useEffect } from 'react'
import styles from './MoneyTransaction.module.css'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'
import { MoneyTransactionList } from './MoneyTransactionList'

const useHttpRequest = (endpoint) => {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        setResponse(json)
        setLoading(false)
      })
  }, [])
  return { response, loading }
}

export const MoneyTransaction = () => {
  const { response: transactions, loading: transactionsLoading } = useHttpRequest('http://localhost:3001/money-transaction')
  const { response: users, loading: usersLoading } = useHttpRequest('http://localhost:3001/user')

  if (transactionsLoading || usersLoading) {
    // Render a loading indicator while data is being fetched
    return <div>Loading...</div>
  }

  return (
    <main className={styles.container}>
      <MoneyTransactionCreate users={users} />
      <MoneyTransactionList transactions={transactions} users={users}/>
    </main>
  )
}
