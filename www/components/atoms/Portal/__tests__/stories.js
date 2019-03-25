import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from 'components/atoms/Button'

import Portal from '..'

const style = {
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
}

storiesOf('Portal', module)
  .add('default', () => (
    <>
      <Button>Click me</Button>
      <Portal>
        <div id="abc" style={style}>
          default heading
        </div>
      </Portal>
    </>
  ))
  .add('disabledPortal', () => (
    <>
      <Button>Click me</Button>
      <Portal disabledPortal>
        <div id="abc" style={style}>
          default heading
        </div>
      </Portal>
    </>
  ))
