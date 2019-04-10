import React, { useContext, useCallback, useEffect } from 'react'

import DrawerContext from 'context/DrawerContext'
import useViewport from 'components/utils/hooks/useViewport'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import Button from 'components/atoms/Button'
import Drawer from 'components/molecules/Drawer'
import MenuList from 'components/molecules/MenuList'

import MenuItemLinks from './MenuItemLinks'
import menus from './menus'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function LeftBar(props) {
  const viewport = useViewport()
  const { opened, onToggle } = useContext(DrawerContext)

  const openDrawer = useCallback(() => {
    if (viewport.isSmall) {
      onToggle(false)
    } else {
      onToggle(true)
    }
  }, [onToggle, viewport.isSmall])

  useEffect(() => {
    openDrawer()
  }, [openDrawer])

  return (
    <nav>
      <Drawer
        className={cssModules`drawer`}
        opened={opened}
        hasBackdrop={viewport.isSmall}
        disabledPortal={!viewport.isSmall}
        onClose={() => onToggle(false)}
      >
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
