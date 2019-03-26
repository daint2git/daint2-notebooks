import React from 'react'
import { storiesOf } from '@storybook/react'

import { CommentIcon } from 'components/atoms/Icon'
import Button from 'components/atoms/Button'
import Alert from 'components/atoms/Alert'
import IconButton from 'components/molecules/IconButton'

import Tooltip from '..'

storiesOf('Tooltip', module)
  .add('default', () => (
    <Tooltip title={<div id="abc">default heading</div>}>
      <Button style={{ margin: '50px' }}>Click me</Button>
    </Tooltip>
  ))
  .add('with Button', () => (
    <Tooltip title={<Alert>default heading</Alert>}>
      <Button style={{ margin: '50px' }}>Click me</Button>
    </Tooltip>
  ))
  .add('with icon', () => (
    <Tooltip title={<Alert>default heading</Alert>}>
      <CommentIcon style={{ margin: '50px' }} />
    </Tooltip>
  ))
  .add('with icon button', () => (
    <Tooltip title={<Alert>default heading</Alert>}>
      <IconButton style={{ margin: '50px' }} icon={<CommentIcon />} />
    </Tooltip>
  ))
  .add('with event open + close', () => (
    <Tooltip
      onOpen={e => console.log('onOpen', e)}
      onClose={e => console.log('onClose', e)}
      title={<Alert>default heading</Alert>}
    >
      <IconButton style={{ margin: '50px' }} icon={<CommentIcon />} />
    </Tooltip>
  ))
