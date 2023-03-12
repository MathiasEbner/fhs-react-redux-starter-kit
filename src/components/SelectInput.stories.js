import React from 'react'
import { SelectInput } from './SelectInput'

export default {
  title: 'SelectInput',
  component: SelectInput
}

const Template = args => <SelectInput {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'User',
  users: [
    { name: 'Mathias', id: '1' },
    { name: 'Lukas', id: '2' },
    { name: 'Simon', id: '3' }
  ]
}
