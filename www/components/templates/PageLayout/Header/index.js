import React from 'react'

import Button from 'components/atoms/Button'
import { AlertIcon, CommentIcon, HelpIcon } from 'components/atoms/Icon'
import SpacerColumn from 'components/atoms/SpacerColumn'
import IconButton from 'components/molecules/IconButton'
import ToolBar from 'components/molecules/ToolBar'
import AppBar from 'components/molecules/AppBar'

const Header = () => {
  return (
    <AppBar>
      <ToolBar>
        <Button>ABC</Button>
        <SpacerColumn />
        <IconButton icon={<AlertIcon />} />
        <IconButton icon={<CommentIcon />} />
        <IconButton icon={<HelpIcon />} />
      </ToolBar>
    </AppBar>
  )
}

export default Header
