import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from '..'

storiesOf('Loading', module)
  .add('default', () => <Loading />)
  .add('type="spin"', () => <Loading type="spin" />)
  .add('type="wave"', () => <Loading type="wave" />)
  .add('type="showHide"', () => <Loading type="showHide" />)
