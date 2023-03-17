import React from 'react'
import { ButtonInput } from './ButtonInput'

export default {
  title: 'ButtonInput',
  component: ButtonInput
}

const Template = args => <ButtonInput {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Sign Up',
  size: 'small'
}
