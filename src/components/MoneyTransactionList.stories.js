import React from 'react'
import { MoneyTransactionList } from './MoneyTransactionList'

export default {
  title: 'MoneyTransactionList',
  component: MoneyTransactionList
}

const Template = args => <MoneyTransactionList {...args} />

export const Default = Template.bind({})
Default.args = {
  users: [
    { name: 'Mathias', id: 1 },
    { name: 'Lukas', id: 2 },
    { name: 'Simon', id: 3 }
  ],

  transactions: [
    { id: 1, creditorId: 1, debitorId: 2, amount: 10.00, paidAt: null },
    { id: 2, creditorId: 3, debitorId: 1, amount: 11.20, paidAt: '2000-01-01T00:00:00+01+00' }
  ]
}
