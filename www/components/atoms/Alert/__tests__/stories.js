import React from 'react'
import { storiesOf } from '@storybook/react'

import FlexWrapper from 'components/molecules/FlexWrapper'
import Spacer from 'components/atoms/Spacer'

import Alert from '..'

storiesOf('Alert', module)
  .add('default', () => <Alert />)
  .add('with text', () => <Alert>Hello Alert</Alert>)
  .add('with color', () => (
    <FlexWrapper direction="column">
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
    </FlexWrapper>
  ))
  .add('with color + variant="outline"', () => (
    <FlexWrapper direction="column">
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
    </FlexWrapper>
  ))
