import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from 'components/atoms/Button'
import { AlertIcon, CommentIcon, HelpIcon } from 'components/atoms/Icon'
import SpacerColumn from 'components/atoms/SpacerColumn'
import IconButton from 'components/molecules/IconButton'
import ToolBar from 'components/molecules/ToolBar'

import AppBar from '..'

storiesOf('AppBar', module)
  .add('default', () => (
    <AppBar>
      <ToolBar>
        <Button>ABC</Button>
        <SpacerColumn />
        <IconButton icon={<AlertIcon />} />
        <IconButton icon={<CommentIcon />} />
        <IconButton icon={<HelpIcon />} />
      </ToolBar>
    </AppBar>
  ))
  .add('color="inverse"', () => (
    <AppBar color="inverse">
      <ToolBar>
        <Button color="inverse">ABC</Button>
        <SpacerColumn />
        <IconButton icon={<AlertIcon />} color="inverse" />
        <IconButton icon={<CommentIcon />} color="inverse" />
        <IconButton icon={<HelpIcon />} color="inverse" />
      </ToolBar>
    </AppBar>
  ))
