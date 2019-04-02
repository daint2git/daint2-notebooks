import React from 'react'

import { MenuIcon, AlertIcon, CommentIcon, HelpIcon } from 'components/atoms/Icon'
import SpacerColumn from 'components/atoms/SpacerColumn'
import IconButton from 'components/molecules/IconButton'
import ToolBar from 'components/molecules/ToolBar'
import AppBar from 'components/molecules/AppBar'

import DrawerContext from '../DrawerContext'

const Header = () => {
  const { isVisibleDrawer, setVisibleDrawer } = React.useContext(DrawerContext)
  return (
    <AppBar>
      <ToolBar>
        <IconButton
          icon={<MenuIcon width={18} height={18} />}
          onClick={() => setVisibleDrawer(!isVisibleDrawer)}
        />
        <SpacerColumn />
        <IconButton icon={<AlertIcon />} />
        <IconButton icon={<CommentIcon />} />
        <IconButton icon={<HelpIcon />} />
      </ToolBar>
    </AppBar>
  )
}

export default Header
