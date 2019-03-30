import React from 'react'
import { storiesOf } from '@storybook/react'

import ExternalLink from '..'

storiesOf('ExternalLink', module).add('default', () => (
  <>
    <ExternalLink href="https://github.com/twbs/bootstrap/releases/download/v4.0.0/bootstrap-4.0.0-dist.zip">
      bootstrap-4.0.0-dist.zip
    </ExternalLink>
    <br />
    <ExternalLink href="https://www.w3schools.com/js/default.asp">js tutorial</ExternalLink>
  </>
))
