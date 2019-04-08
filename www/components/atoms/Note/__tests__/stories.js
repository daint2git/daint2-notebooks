import React from 'react'
import { storiesOf } from '@storybook/react'

import FlexContainer from 'components/atoms/FlexContainer'
import Spacer from 'components/atoms/Spacer'

import Note from '..'

storiesOf('Note', module)
  .add('default', () => <Note />)
  .add('with text', () => <Note>Hello Note</Note>)
  .add('with long text', () => (
    <Note>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
    </Note>
  ))
  .add('with color', () => (
    <FlexContainer direction="column" vertical="center">
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
    </FlexContainer>
  ))
  .add('with size', () => (
    <FlexContainer direction="column" vertical="center">
      <Note size="small">small</Note>
      <Spacer />
      <Note size="medium">medium</Note>
      <Spacer />
      <Note size="base-large">base-large </Note>
      <Spacer />
      <Note size="large">large</Note>
      <Spacer />
      <Note size="x-large">x-large</Note>
    </FlexContainer>
  ))
