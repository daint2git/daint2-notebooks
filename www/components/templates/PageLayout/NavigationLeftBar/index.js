import React from 'react'

import MenuList from 'components/molecules/MenuList'
import Drawer from 'components/molecules/Drawer'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import MenuItemLinks from './MenuItemLinks'
import styles from './styles.scss'
import menus from './menus'

const cssModules = cssModuleNameTag(styles)

const NavigationLeftBar = props => {
  return (
    <nav className={cssModules`root`}>
      <Drawer isOpened={true} disabledPortal>
        <MenuList>
          <MenuItemLinks list={menus} {...props} />
        </MenuList>
      </Drawer>
    </nav>
  )
}

export default NavigationLeftBar
