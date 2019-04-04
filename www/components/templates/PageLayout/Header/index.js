import React, { useContext } from 'react'

import { MenuIcon, SettingsIcon, NotificationIcon, HelpIcon } from 'components/atoms/Icon'
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
        <div
          style={{
            fontSize: '24px',
            lineHeight: '1.2',
            letterSpacing: '0.5px',
            paddingLeft: '10px',
            fontWeight: '600',
          }}
        >
          DAINT2 NOTEBOOKS
        </div>
        <SpacerColumn />
        <IconButton color="inverse" icon={<NotificationIcon />} />
        <IconButton color="inverse" icon={<SettingsIcon />} />
        <IconButton color="inverse" icon={<HelpIcon />} />
      </ToolBar>
    </AppBar>
  )
}

export default Header
