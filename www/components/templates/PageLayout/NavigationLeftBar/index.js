import React from 'react'

import Button from 'components/atoms/Button'
import MenuList from 'components/molecules/MenuList'
import Drawer from 'components/molecules/Drawer'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import DrawerContext from '../DrawerContext'

import MenuItemLinks from './MenuItemLinks'
import styles from './styles.scss'
import menus from './menus'

const cssModules = cssModuleNameTag(styles)

const NavigationLeftBar = props => {
  const { isVisibleDrawer, setVisibleDrawer } = React.useContext(DrawerContext)
  const styles = {
    width: !isVisibleDrawer ? '0px' : 'inherit',
  }
  return (
    <nav className={cssModules`root`} style={styles}>
      <Drawer isOpened={isVisibleDrawer} disabledPortal className={cssModules`drawer`}>
        <MenuList>
          <MenuItemLinks list={menus} {...props} />
        </MenuList>
        <div className={cssModules`buttons`}>
          <Button size="large" color="inverse" onClick={() => setVisibleDrawer(false)}>
            Close
          </Button>
        </div>
      </Drawer>
    </nav>
  )
}

export default NavigationLeftBar
