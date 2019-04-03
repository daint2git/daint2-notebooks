import React, { useContext } from 'react'

import Button from 'components/atoms/Button'
import MenuList from 'components/molecules/MenuList'
import Drawer from 'components/molecules/Drawer'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import DrawerContext from '../DrawerContext'

import MenuItemLinks from './MenuItemLinks'
import menus from './menus'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const NavigationLeftBar = props => {
  const { opened, onDrawerToggle } = useContext(DrawerContext)
  return (
    <nav className={cssModules`root`}>
      <Drawer className={cssModules`drawer`} opened={opened} disabledPortal>
        <MenuList>
          <MenuItemLinks list={menus} {...props} />
        </MenuList>
        <div className={cssModules`buttons`}>
          <Button color="inverse" onClick={() => onDrawerToggle(false)}>
            Close
          </Button>
        </div>
      </Drawer>
    </nav>
  )
}

export default NavigationLeftBar
