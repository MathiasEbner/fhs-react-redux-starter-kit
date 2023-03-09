import React from 'react'
import { storiesOf } from '@storybook/react'
import { UserSignIn } from './UserSignIn'

storiesOf('UserSignIn', module)
  .add('primary (default)', () => (
    <UserSignIn>Click me</UserSignIn>
  ))
