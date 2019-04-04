import React from 'react'
import { storiesOf } from '@storybook/react'

import BaseLink from '..'

storiesOf('BaseLink', module)
  .add('default', () => (
    <BaseLink href="https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip">
      bootstrap-4.0.0-dist.zip
    </BaseLink>
  ))
  .add('variant="external"', () => (
    <>
      <BaseLink
        variant="external"
        href="https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip"
      >
        bootstrap-4.0.0-dist.zip
      </BaseLink>
      <br />
      <BaseLink variant="external" href="https://www.w3schools.com/js/default.asp">
        js tutorial
      </BaseLink>
    </>
  ))
  .add('variant="anchor"', () => (
    <BaseLink
      variant="anchor"
      href="https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip"
    >
      bootstrap-4.0.0-dist.zip
    </BaseLink>
  ))
