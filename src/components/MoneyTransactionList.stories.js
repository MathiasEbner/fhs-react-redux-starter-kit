import React from 'react'
import { MoneyTransactionList } from './MoneyTransactionList'

export default {
  title: 'MoneyTransactionList',
  component: MoneyTransactionList
}

const Template = args => <MoneyTransactionList {...args} />

export const Default = Template.bind({})
Default.args = {
  transactions: [
    { name: 'Mathias', price: 10.40, paid: true, id: 1 },
    { name: 'Lukas', price: 10.40, paid: false, id: 2 },
    { name: 'Simon', price: 10.40, paid: true, id: 3 }
  ]
}
