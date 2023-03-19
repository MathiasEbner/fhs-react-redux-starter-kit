import React from 'react'
import { InputSwitch } from './InputSwitch'

export default {
  title: 'InputSwitch',
  component: InputSwitch
}

const Template = args => <InputSwitch {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'I owe somebody',
  id: 'switch1'
}
