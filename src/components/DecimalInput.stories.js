import React from 'react'
import { DecimalInput } from './DecimalInput'

export default {
  title: 'DecimalInput',
  component: DecimalInput
}

const Template = args => <DecimalInput {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Amount'
}
