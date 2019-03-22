import React from 'react'
import { storiesOf } from '@storybook/react'

import Spacer from 'components/atoms/Spacer'
import { Pen, Calendar, Alert, Comment } from 'components/atoms/Icon'
import FlexWrapper from 'components/molecules/FlexWrapper'
import IconButton from '..'

storiesOf('IconButton', module)
  .add('default', () => <IconButton />)
  .add('with icon', () => (
    <FlexWrapper direction="column">
      <IconButton Icon={Pen}>Pen</IconButton>
      <Spacer />
      <IconButton Icon={Calendar}>Calendar</IconButton>
      <Spacer />
      <IconButton Icon={Alert}>Alert</IconButton>
      <Spacer />
      <IconButton Icon={Comment}>Comment</IconButton>
    </FlexWrapper>
  ))
  .add('with icon + direction="column"', () => (
    <FlexWrapper direction="column">
      <IconButton Icon={Pen} direction="column">
        Pen
      </IconButton>
      <Spacer />
      <IconButton Icon={Calendar} direction="column">
        Calendar
      </IconButton>
      <Spacer />
      <IconButton Icon={Alert} direction="column">
        Alert
      </IconButton>
      <Spacer />
      <IconButton Icon={Comment} direction="column">
        Comment
      </IconButton>
      <Spacer />
      <IconButton Icon={Comment} direction="column">
        <span>Comment 1</span>
        <span>Comment 2</span>
      </IconButton>
    </FlexWrapper>
  ))
