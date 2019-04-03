import React, { useContext } from 'react'

import {
  MenuIcon,
  SettingsIcon,
  AlertIcon,
  NotificationIcon,
  HelpIcon,
} from 'components/atoms/Icon'
import SpacerColumn from 'components/atoms/SpacerColumn'
import AppBar from 'components/molecules/AppBar'
import ToolBar from 'components/molecules/ToolBar'
import IconButton from 'components/molecules/IconButton'

import DrawerContext from '../DrawerContext'

const Header = () => {
  const { opened, onDrawerToggle } = useContext(DrawerContext)
  return (
    <AppBar color="inverse">
      <ToolBar>
        <IconButton color="inverse" icon={<MenuIcon />} onClick={() => onDrawerToggle(!opened)} />
        <SpacerColumn />
        <IconButton color="inverse" icon={<AlertIcon />} />
        <IconButton color="inverse" icon={<NotificationIcon />} />
        <IconButton color="inverse" icon={<SettingsIcon />} />
        <IconButton color="inverse" icon={<HelpIcon />} />
      </ToolBar>
    </AppBar>
  )
}

export default Header
