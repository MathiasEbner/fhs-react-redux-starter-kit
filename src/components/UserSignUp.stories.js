import React from 'react'
import { UserSignUp } from './UserSignUp'

export default {
  title: 'UserSignUp',
  component: UserSignUp
}

const Template = args => <UserSignUp {...args} />

export const Default = Template.bind({})
Default.args = {

}
