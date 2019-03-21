import React from 'react'
import { storiesOf } from '@storybook/react'

import FlexWrapper from 'components/molecules/FlexWrapper'
import Spacer from 'components/atoms/Spacer'
import Button from '../'

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with color', () => (
    <FlexWrapper direction="column">
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
    </FlexWrapper>
  ))
  .add('with type + variant="outline"', () => (
    <FlexWrapper direction="column">
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
    </FlexWrapper>
  ))
  .add('with color + variant="text"', () => (
    <FlexWrapper direction="column">
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
    </FlexWrapper>
  ))
  .add('with size', () => (
    <FlexWrapper direction="column">
      <Button size="small">small</Button>
      <Spacer />
      <Button size="medium">medium</Button>
      <Spacer />
      <Button size="large">large</Button>
    </FlexWrapper>
  ))
  .add('with disabled', () => <Button disabled>disabled</Button>)
  .add('with hidden', () => <Button hidden>hidden</Button>)
