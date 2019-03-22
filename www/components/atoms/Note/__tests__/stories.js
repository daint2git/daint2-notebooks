import React from 'react'
import { storiesOf } from '@storybook/react'

import FlexWrapper from 'components/molecules/FlexWrapper'
import Spacer from 'components/atoms/Spacer'
import Note from '..'

storiesOf('Note', module)
  .add('default', () => <Note />)
  .add('with text', () => <Note>Hello Note</Note>)
  .add('with color', () => (
    <FlexWrapper direction="column">
      <Note color="primary">primary</Note>
      <Spacer />
      <Note color="info">info</Note>
      <Spacer />
      <Note color="danger">danger</Note>
      <Spacer />
      <Note color="success">success</Note>
      <Spacer />
      <Note color="warning">warning</Note>
      <Spacer />
      <Note color="inverse">inverse</Note>
    </FlexWrapper>
  ))
