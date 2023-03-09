import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextInput } from './TextInput'

storiesOf('TextInput', module)
  .add('primary (default)', () => (
    <TextInput>Click me</TextInput>
  ))
