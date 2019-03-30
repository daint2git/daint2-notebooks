import React from 'react'
import PropTypes from 'prop-types'

import Backdrop from 'components/atoms/Backdrop'
import Portal, { PortalWrapper } from 'components/atoms/Portal'
import noop from 'components/utils/noop'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Drawer = props => {
  const { children, className, isOpened, disabledPortal, hasBackdrop, onClose, ...other } = props

  if (!isOpened) {
    return null
  }

  return (
    <Portal disabledPortal={disabledPortal}>
      <PortalWrapper role="drawer">
        {hasBackdrop && <Backdrop onClick={onClose} />}
        <div className={cssModules`root ${className}`} {...other}>
          {children}
        </div>
      </PortalWrapper>
    </Portal>
  )
}

Drawer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpened: PropTypes.bool,
  disabledPortal: PropTypes.bool,
  hasBackdrop: PropTypes.bool,
  onClose: PropTypes.func,
}

Drawer.defaultProps = {
  isOpened: false,
  hasBackdrop: false,
  onClose: noop,
}

export default Drawer
