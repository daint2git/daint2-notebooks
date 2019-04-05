import React from 'react'
import { storiesOf } from '@storybook/react'

import Spacer from 'components/atoms/Spacer'
import { PenIcon, CalendarIcon, AlertIcon, CommentIcon } from 'components/atoms/Icon'
import FlexContainer from 'components/atoms/FlexContainer'

import IconButton from '..'

storiesOf('IconButton', module)
  .add('default', () => <IconButton />)
  .add('with icon', () => (
    <FlexContainer direction="column" vertical="center">
      <IconButton icon={<PenIcon />}>Pen</IconButton>
      <Spacer />
      <IconButton icon={<CalendarIcon />}>Calendar</IconButton>
      <Spacer />
      <IconButton icon={<AlertIcon />}>Alert</IconButton>
      <Spacer />
      <IconButton icon={<CommentIcon />}>Comment</IconButton>
    </FlexContainer>
  ))
  .add('with icon + direction="column"', () => (
    <FlexContainer direction="column" vertical="center">
      <IconButton icon={<PenIcon />} direction="column">
        Pen
      </IconButton>
      <Spacer />
      <IconButton icon={<CalendarIcon />} direction="column">
        Calendar
      </IconButton>
      <Spacer />
      <IconButton icon={<AlertIcon />} direction="column">
        Alert
      </IconButton>
      <Spacer />
      <IconButton icon={<CommentIcon />} direction="column">
        Comment
      </IconButton>
      <Spacer />
      <IconButton icon={<CommentIcon />} direction="column">
        <span>Comment 1</span>
        <span>Comment 2</span>
      </IconButton>
    </FlexContainer>
  ))
