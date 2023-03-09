import React from 'react'
import { storiesOf } from '@storybook/react'
import { MoneyTransactionCreate } from './MoneyTransactionCreate'

storiesOf('MoneyTransactionCreate', module)
  .add('primary (default)', () => (
    <MoneyTransactionCreate>Click me</MoneyTransactionCreate>
  ))
