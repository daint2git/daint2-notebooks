import React, { useContext } from 'react'

import DrawerContext from 'context/DrawerContext'
import SpacerColumn from 'components/atoms/SpacerColumn'
import { MenuIcon, SettingsIcon, NotificationIcon, QuestionIcon } from 'components/atoms/Icon'
import AppBar from 'components/molecules/AppBar'
import AppLogo from 'components/molecules/AppLogo'
import ToolBar from 'components/molecules/ToolBar'
import IconButton from 'components/molecules/IconButton'

function Header() {
  const { opened, onToggle } = useContext(DrawerContext)
  return (
    <AppBar color="inverse">
      <ToolBar>
        <IconButton color="inverse" icon={<MenuIcon />} onClick={() => onToggle(!opened)} />
        <AppLogo />
        <SpacerColumn />
        <IconButton color="inverse" icon={<NotificationIcon />} />
        <IconButton color="inverse" icon={<SettingsIcon />} />
        <IconButton color="inverse" icon={<QuestionIcon />} />
      </ToolBar>
    </AppBar>
  )
}

export default Header
