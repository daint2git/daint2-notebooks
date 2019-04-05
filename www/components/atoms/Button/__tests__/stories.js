import React from 'react'
import { storiesOf } from '@storybook/react'

import FlexContainer from 'components/atoms/FlexContainer'
import Spacer from 'components/atoms/Spacer'

import Button from '..'

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with color', () => (
    <FlexContainer direction="column" vertical="center">
      <Button color="primary">primary</Button>
      <Spacer />
      <Button color="info">info</Button>
      <Spacer />
      <Button color="danger">danger</Button>
      <Spacer />
      <Button color="success">success</Button>
      <Spacer />
      <Button color="warning">warning</Button>
      <Spacer />
      <Button color="inverse">inverse</Button>
      <Spacer />
      <Button color="light">light</Button>
      <Spacer />
      <Button color="dark">dark</Button>
      <Button color="transparent">transparent</Button>
    </FlexContainer>
  ))
  .add('with color + variant="outline"', () => (
    <FlexContainer direction="column" vertical="center">
      <Button color="primary" variant="outline">
        primary
      </Button>
      <Spacer />
      <Button color="info" variant="outline">
        info
      </Button>
      <Spacer />
      <Button color="danger" variant="outline">
        danger
      </Button>
      <Spacer />
      <Button color="success" variant="outline">
        success
      </Button>
      <Spacer />
      <Button color="warning" variant="outline">
        warning
      </Button>
      <Spacer />
      <Button color="inverse" variant="outline">
        inverse
      </Button>
      <Spacer />
      <Button color="light" variant="outline">
        light
      </Button>
      <Spacer />
      <Button color="dark" variant="outline">
        dark
      </Button>
    </FlexContainer>
  ))
  .add('with color + variant="text"', () => (
    <FlexContainer direction="column" vertical="center">
      <Button color="primary" variant="text">
        primary
      </Button>
      <Spacer />
      <Button color="info" variant="text">
        info
      </Button>
      <Spacer />
      <Button color="danger" variant="text">
        danger
      </Button>
      <Spacer />
      <Button color="success" variant="text">
        success
      </Button>
      <Spacer />
      <Button color="warning" variant="text">
        warning
      </Button>
      <Spacer />
      <Button color="inverse" variant="text">
        inverse
      </Button>
    </FlexContainer>
  ))
  .add('with size', () => (
    <FlexContainer direction="column" vertical="center">
      <Button size="small">small</Button>
      <Spacer />
      <Button size="medium">medium</Button>
      <Spacer />
      <Button size="large">large</Button>
      <Spacer />
      <Button size="x-large">x-large</Button>
    </FlexContainer>
  ))
  .add('with disabled', () => <Button disabled>disabled</Button>)
  .add('with hidden', () => <Button hidden>hidden</Button>)
  .add('with isFullWidth', () => <Button isFullWidth>full width</Button>)
  .add('with div like button', () => <Button component="div">div</Button>)
