import React from 'react'
import { SelectOption } from './SelectOption'

export default {
  title: 'SelectOption',
  component: SelectOption
}

const Template = args => <SelectOption {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'I owe somebody'
}
