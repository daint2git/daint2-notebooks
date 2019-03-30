import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import Divider from 'components/atoms/Divider'
import Spacer from 'components/atoms/Spacer'
import MenuList, { MenuItem, MenuItemIcon, MenuItemText } from 'components/molecules/MenuList'
import Collapse from 'components/molecules/Collapse'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import withRepeater from 'components/utils/withRepeater'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const MenuItemLink = props => {
  const { path, icon, icon: Icon = () => null, label, level, children, currentPath } = props
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <MenuItem style={{ display: 'block' }}>
        <Link href={path}>
          <a
            href={path}
            className={cssModules`link`}
            data-active={path === currentPath}
            onClick={() => setOpen(!open)}
          >
            {icon && (
              <MenuItemIcon>
                <Icon width={16} height={16} />
              </MenuItemIcon>
            )}
            <MenuItemText>{label}</MenuItemText>
          </a>
        </Link>
        {children && (
          <Collapse in={open}>
            <MenuList>
              <MenuItemLinks list={children} />
            </MenuList>
          </Collapse>
        )}
      </MenuItem>
      {level === 1 && (
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
  currentPath: PropTypes.string,
}

const MenuItemLinks = withRepeater(MenuItemLink)

export default MenuItemLinks
