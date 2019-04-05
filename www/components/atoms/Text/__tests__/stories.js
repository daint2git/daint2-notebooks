import React from 'react'
import { storiesOf } from '@storybook/react'

import Spacer from 'components/atoms/Spacer'

import Text from '..'

storiesOf('Text', module)
  .add('default', () => <Text>Text</Text>)
  .add('ellipsis', () => (
    <Text hasEllipsis style={{ width: '100px' }}>
      Text Text Text Text Text Text Text Text Text
    </Text>
  ))
  .add('align', () => (
    <>
      <Text align="left">left - Text</Text>
      <Spacer />
      <Text align="center">center - Text</Text>
      <Spacer />
      <Text align="right">right - Text</Text>
      <Spacer />
      <Text align="justify">
        justify - Text justify - Text justify - Text justify - Text justify - Text justify - Text
        justify - Text justify - Text justify - Text justify - Text justify - Text justify - Text
        justify - Text justify - Text justify - Text justify - Text justify - Text justify - Text
      </Text>
      <Spacer />
    </>
  ))
  .add('weight', () => (
    <>
      <Text weight="bold">bold - Text</Text>
      <Spacer />
      <Text weight="lighter">lighter - Text</Text>
      <Spacer />
      <Text weight="bolder">bolder - Text</Text>
      <Spacer />
    </>
  ))
  .add('transform', () => (
    <>
      <Text transform="uppercase">uppercase - Text</Text>
      <Spacer />
      <Text transform="lowercase">lowercase - Text</Text>
      <Spacer />
      <Text transform="capitalize">capitalize - Text</Text>
      <Spacer />
    </>
  ))
  .add('decoration', () => (
    <>
      <Text decoration="overline">overline - Text</Text>
      <Spacer />
      <Text decoration="underline">underline - Text</Text>
      <Spacer />
      <Text decoration="line-through">line-through - Text</Text>
      <Spacer />
    </>
  ))
  .add('color', () => (
    <>
      <Text color="primary">primary - Text</Text>
      <Spacer />
      <Text color="info">info - Text</Text>
      <Spacer />
      <Text color="danger">danger - Text</Text>
      <Spacer />
      <Text color="success">success - Text</Text>
      <Spacer />
      <Text color="warning">warning - Text</Text>
      <Spacer />
      <Text color="inverse">inverse - Text</Text>
      <Spacer />
      <Text color="light">light - Text</Text>
      <Spacer />
      <Text color="dark">dark - Text</Text>
      <Spacer />
    </>
  ))
  .add('size', () => (
    <>
      <Text size="small">small - Text</Text>
      <Spacer />
      <Text size="medium">medium - Text</Text>
      <Spacer />
      <Text size="large">large - Text</Text>
      <Spacer />
      <Text size="x-large">x-large - Text</Text>
      <Spacer />
    </>
  ))
