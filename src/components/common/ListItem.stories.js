import React from 'react'
import { ListItem } from './ListItem'

export default {
  title: 'ListItem',
  component: ListItem
}

const Template = args => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 1,
  creditorId: 1,
  amount: 10.40,
  paidAt: null,
  users: [
    { name: 'Mathias', id: 1 },
    { name: 'Lukas', id: 2 },
    { name: 'Simon', id: 3 }
  ]
}
