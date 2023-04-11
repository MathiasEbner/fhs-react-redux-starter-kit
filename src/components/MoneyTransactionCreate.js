import React, { useEffect } from 'react'
import styles from './MoneyTransactionCreate.module.css'
import { SelectInput } from './inputs/SelectInput'
import { DecimalInput } from './inputs/DecimalInput'
import { Button } from './common/Button'
import { ButtonInput } from './inputs/ButtonInput'
import { InputSwitch } from './inputs/InputSwitch'
import { useFormik } from 'formik'
import { useUsers } from './globalState'
import memoize from 'memoize-one'

export const MoneyTransactionCreate = () => {
  const users = useUsers(memoize((state) => state.users))
  const fetchUser = useUsers(memoize((state) => state.fetchUsers))

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const postData = (creditorId, debitorId, amount, paidAt) => {
    fetch('http://localhost:3001/money-transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        creditorId,
        debitorId,
        amount,
        paidAt
      })
    })
  }

  const formik = useFormik({
    initialValues: { user: users[0]?.name, amount: '' }, // the first user of users is default
    onSubmit: values => {
      if (values.pay === 'I owe somebody') {
        postData(users.find(user => user.name === values.user).id, users[0].id, values.amount, null) // the first user of users is default debitor
        return console.log(`debitorId: ${users[0].id}, creditorId: ${users.find(user => user.name === values.user).id}, amount: ${values.amount}`)
      }
      if (values.pay === 'Somebody owes me') {
        postData(users[0].id, users.find(user => user.name === values.user).id, values.amount, null) // the first user of users is default creditor
        return console.log(`debitorId: ${users.find(user => user.name === values.user).id}, creditorId: ${users[0].id}, amount: ${values.amount}`)
      }
    }
  })

  return (
    <div className={styles.container}>
      <Button className={styles.logOut} path='/sign-in' text='Log out' size='small' />
      <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <div className={styles.switchRow}>
          <InputSwitch text='I owe somebody' id='switch1' onChange={formik.handleChange} />
          <InputSwitch text='Somebody owes me' id='switch2' onChange={formik.handleChange}/>
        </div>
        <SelectInput name='user' users={users} onChange={formik.handleChange} value={formik.values.user} />
        <DecimalInput name='amount' onChange={formik.handleChange} value={formik.values.amount}/>
        <ButtonInput text='Create' size='small' />
      </form>
    </div>
  )
}
