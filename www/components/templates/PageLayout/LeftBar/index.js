import React, { useContext } from 'react'

import DrawerContext from 'context/DrawerContext'
import Button from 'components/atoms/Button'
import MenuList from 'components/molecules/MenuList'
import Drawer from 'components/molecules/Drawer'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import MenuItemLinks from './MenuItemLinks'
import menus from './menus'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function LeftBar(props) {
  const { opened, onToggle } = useContext(DrawerContext)
  return (
    <nav className={cssModules`root`}>
      <Drawer className={cssModules`drawer`} opened={opened} disabledPortal>
        <MenuList>
          <MenuItemLinks list={menus} {...props} />
        </MenuList>
        <div className={cssModules`buttons`}>
          <Button color="inverse" onClick={() => onToggle(false)}>
            Close
          </Button>
        </div>
      </Drawer>
    </nav>
  )
}

export default LeftBar
