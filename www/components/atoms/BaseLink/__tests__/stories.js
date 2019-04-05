import React from 'react'
import { storiesOf } from '@storybook/react'

import BaseLink from '..'

storiesOf('BaseLink', module)
  .add('default', () => <BaseLink />)
  .add('variant="external"', () => (
    <BaseLink
      variant="external"
      href="https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip"
    >
      bootstrap-4.0.0-dist.zip
    </BaseLink>
  ))
  .add('variant="internal"', () => (
    <BaseLink
      variant="internal"
      href="https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip"
    >
      bootstrap-4.0.0-dist.zip
    </BaseLink>
  ))
  .add('variant="anchor"', () => (
    <BaseLink
      variant="anchor"
      href="https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip"
    >
      bootstrap-4.0.0-dist.zip
    </BaseLink>
  ))
