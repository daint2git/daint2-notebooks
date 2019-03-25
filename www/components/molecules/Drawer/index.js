import React from 'react'
import PropTypes from 'prop-types'

import Backdrop from 'components/atoms/Backdrop'
import Portal from 'components/atoms/Portal'

import noop from 'components/utils/noop'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Drawer = ({ children, className, isOpen, onClose, ...other }) => {
  if (!isOpen) {
    return null
  }
  return (
    <Portal role="drawer">
      {isOpen && <Backdrop onClick={onClose} />}
      <div className={cssModules`root ${className}`} {...other}>
        <div>{children}</div>
      </div>
    </Portal>
  )
}

Drawer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

Drawer.defaultProps = {
  isOpen: false,
  onClose: noop,
}

export default Drawer
