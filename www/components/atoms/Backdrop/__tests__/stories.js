import React from 'react'
import { storiesOf } from '@storybook/react'

import Backdrop from '..'

storiesOf('Backdrop', module).add('default', () => (
  <>
    <Backdrop />
    <div style={{ height: '800px' }}>coverred by Backdrop</div>
  </>
))
