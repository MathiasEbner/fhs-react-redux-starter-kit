import React from 'react'
import { CustomLink } from './CustomLink'

export default {
  title: 'CustomLink',
  component: CustomLink
}

const Template = args => <CustomLink {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Sign Up',
  path: '#'
}
