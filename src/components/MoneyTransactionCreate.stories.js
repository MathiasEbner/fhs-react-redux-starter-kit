import React from 'react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'

export default {
  title: 'MoneyTransactionCreate',
  component: MoneyTransactionCreate
}

const Template = args => <MoneyTransactionCreate {...args} />

export const Default = Template.bind({})
Default.args = {
  users: [
    { name: 'Mathias', id: 1 },
    { name: 'Lukas', id: 2 },
    { name: 'Simon', id: 3 }
  ]
}
