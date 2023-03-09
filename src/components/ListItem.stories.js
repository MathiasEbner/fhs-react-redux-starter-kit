import React from 'react'
import { storiesOf } from '@storybook/react'
import { ListItem } from './ListItem'

storiesOf('ListItem', module)
  .add('primary (default)', () => (
    <ListItem>Click me</ListItem>
  ))
