import React from 'react'
import { storiesOf } from '@storybook/react'
import { SelectInput } from './SelectInput'

storiesOf('SelectInput', module)
  .add('primary (default)', () => (
    <SelectInput></SelectInput>
  ))
