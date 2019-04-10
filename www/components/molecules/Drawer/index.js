import React from 'react'
import PropTypes from 'prop-types'

import noop from 'components/utils/helpers/noop'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import Backdrop from 'components/atoms/Backdrop'
import Portal, { PortalWrapper } from 'components/atoms/Portal'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Drawer(props) {
  const { children, className, opened, disabledPortal, hasBackdrop, onClose, ...other } = props

  if (!opened) {
    return null
  }

  return (
    <Portal disabledPortal={disabledPortal}>
      <PortalWrapper role="drawer" hidden={disabledPortal}>
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
  opened: PropTypes.bool,
  disabledPortal: PropTypes.bool,
  hasBackdrop: PropTypes.bool,
  onClose: PropTypes.func,
}

Drawer.defaultProps = {
  opened: false,
  hasBackdrop: false,
  onClose: noop,
}

export default Drawer
