import React from 'react'
import PropTypes from 'prop-types'

import Overlay from 'components/atoms/Overlay'

import noop from 'components/utils/noop'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Drawer = ({ children, className, isOpen, onClose, ...other }) => (
  <>
    {isOpen && <Overlay onClick={onClose} />}
    <div
      className={cssModules`root ${className}`}
      data-open={isOpen}
      {...other}
    >
      <div>{children}</div>
    </div>
  </>
)

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
