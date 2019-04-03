import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import PageContext from 'context/PageContext'
import Divider from 'components/atoms/Divider'
import Spacer from 'components/atoms/Spacer'
import { DropDownArrowIcon } from 'components/atoms/Icon'
import MenuList, { MenuItem, MenuItemIcon, MenuItemText } from 'components/molecules/MenuList'
import Collapse from 'components/molecules/Collapse'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import withRepeater from 'components/utils/withRepeater'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const MenuItemLink = props => {
  const { path, icon: Icon = () => null, label, level, children } = props

  const isLevel1 = level === 1
  const {
    pageInfo: { currentPath },
  } = useContext(PageContext)

  let initialOpen = false
  if (currentPath.includes(path) && currentPath.length > path.length) {
    initialOpen = true
  }

  const [open, setOpen] = useState(initialOpen)

  return (
    <>
      <MenuItem style={{ display: 'block' }}>
        {isLevel1 && children ? (
          <button
            type="button"
            className={cssModules`link level1`}
            data-active={path === currentPath}
            onClick={() => setOpen(!open)}
          >
            <MenuItemIcon>
              <Icon width={20} height={20} />
            </MenuItemIcon>
            <MenuItemText>{label}</MenuItemText>

            <div className={cssModules`arrow-icon`}>
              <DropDownArrowIcon style={{ transform: `rotate(${open ? '180' : '0'}deg)` }} />
            </div>
          </button>
        ) : (
          <Link href={path}>
            <a
              href={path}
              className={cssModules`link`}
              data-active={path === currentPath}
              onClick={() => setOpen(!open)}
            >
              <MenuItemIcon>
                <Icon width={20} height={20} />
              </MenuItemIcon>
              <MenuItemText>{label}</MenuItemText>
            </a>
          </Link>
        )}
        {children && (
          <Collapse in={open}>
            <MenuList style={{ padding: 0 }}>
              <MenuItemLinks list={children} />
            </MenuList>
          </Collapse>
        )}
      </MenuItem>
      {isLevel1 && (
        <>
          <Spacer />
          <Divider />
          <Spacer />
        </>
      )}
    </>
  )
}

MenuItemLink.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  level: PropTypes.number,
  children: PropTypes.array,
}

const MenuItemLinks = withRepeater(MenuItemLink)

export default MenuItemLinks
