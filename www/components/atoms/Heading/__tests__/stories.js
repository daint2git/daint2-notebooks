import React from 'react'
import { storiesOf } from '@storybook/react'

import Heading from '..'

storiesOf('Heading', module)
  .add('default', () => <Heading>default heading</Heading>)
  .add('with component', () => (
    <>
      <Heading component="h1">h1. Heading</Heading>
      <Heading component="h2">h2. Heading</Heading>
      <Heading component="h3">h3. Heading</Heading>
    </>
  ))
  .add('with color', () => (
    <>
      <Heading color="light">color light</Heading>
      <Heading color="dark">color dark</Heading>
      <Heading color="primary">color primary</Heading>
    </>
  ))
  .add('with long text', () => (
    <Heading>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Heading>
  ))
