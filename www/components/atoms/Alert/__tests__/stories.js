import React from 'react'
import { storiesOf } from '@storybook/react'

import FlexContainer from 'components/atoms/FlexContainer'
import Spacer from 'components/atoms/Spacer'

import Alert from '..'

storiesOf('Alert', module)
  .add('default', () => <Alert />)
  .add('with text', () => <Alert>Hello Alert</Alert>)
  .add('with color', () => (
    <FlexContainer direction="column">
      <Alert color="primary">primary</Alert>
      <Spacer />
      <Alert color="info">info</Alert>
      <Spacer />
      <Alert color="danger">danger</Alert>
      <Spacer />
      <Alert color="success">success</Alert>
      <Spacer />
      <Alert color="warning">warning</Alert>
      <Spacer />
      <Alert color="inverse">inverse</Alert>
      <Spacer />
      <Alert color="light">light</Alert>
      <Spacer />
      <Alert color="dark">dark</Alert>
    </FlexContainer>
  ))
  .add('with color + variant="outline"', () => (
    <FlexContainer direction="column">
      <Alert color="primary" variant="outline">
        primary
      </Alert>
      <Spacer />
      <Alert color="info" variant="outline">
        info
      </Alert>
      <Spacer />
      <Alert color="danger" variant="outline">
        danger
      </Alert>
      <Spacer />
      <Alert color="success" variant="outline">
        success
      </Alert>
      <Spacer />
      <Alert color="warning" variant="outline">
        warning
      </Alert>
      <Spacer />
      <Alert color="inverse" variant="outline">
        inverse
      </Alert>
      <Spacer />
      <Alert color="light" variant="outline">
        light
      </Alert>
      <Spacer />
      <Alert color="dark" variant="outline">
        dark
      </Alert>
    </FlexContainer>
  ))
