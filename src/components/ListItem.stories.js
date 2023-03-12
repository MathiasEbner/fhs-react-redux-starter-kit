import React from 'react'
import { ListItem } from './ListItem'

export default {
  title: 'ListItem',
  component: ListItem
}

const Template = args => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'A User',
  price: 10.40
}
