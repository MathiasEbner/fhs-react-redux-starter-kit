import React from 'react'
import { UserSignIn } from './UserSignIn'

export default {
  title: 'UserSignIn',
  component: UserSignIn
}

const Template = args => <UserSignIn {...args} />

export const Default = Template.bind({})
Default.args = {
}
