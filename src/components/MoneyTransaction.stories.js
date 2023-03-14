import React from 'react'
import { MoneyTransaction } from './MoneyTransaction'

export default {
  title: 'MoneyTransaction',
  component: MoneyTransaction
}

const Template = args => <MoneyTransaction {...args} />

export const Default = Template.bind({})
Default.args = {

}
