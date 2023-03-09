import React from 'react'
import { storiesOf } from '@storybook/react'
import { UserSignUp } from './UserSignUp'

storiesOf('UserSignUp', module)
  .add('primary (default)', () => (
    <UserSignUp>Click me</UserSignUp>
  ))
