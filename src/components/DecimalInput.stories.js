import React from 'react'
import { storiesOf } from '@storybook/react'
import { DecimalInput } from './DecimalInput'

storiesOf('DecimalInput', module)
  .add('primary (default)', () => (
    <DecimalInput></DecimalInput>
  ))
