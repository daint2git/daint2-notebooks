import React from 'react'
import PropTypes from 'prop-types'

import Portal, { PortalWrapper } from 'components/atoms/Portal'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const childrenRef = React.createRef()

const Tooltip = props => {
  const { children, className, title, onOpen, onClose, ...other } = props
  const [open, setOpen] = React.useState(false)

  const handleEnter = event => {
    setOpen(true)
    onOpen(event)
  }

  const handleLeave = event => {
    setOpen(false)
    onClose(event)
  }

  const setTooltipStyle = element => {
    if (element) {
      const rectRootRef = childrenRef.current.getBoundingClientRect()
      const rectTooltipRef = element.getBoundingClientRect()

      element.style.top = `${rectRootRef.top + rectRootRef.height / 2}px`
      element.style.left = `${rectRootRef.right + 15}px`
      element.style.transform = `translateY(-${rectTooltipRef.height / 2}px)`
    }
  }

  const childrenProps = {
    ...children.props,
    ref: childrenRef,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    ...other
  }

  return (
    <React.Fragment>
      {React.cloneElement(children, childrenProps)}
      {open && (
        <Portal role="tooltip">
          <PortalWrapper style={{ zIndex: -1 }}>
            <div
              className={cssModules`tooltip ${className}`}
              ref={element => setTooltipStyle(element)}
            >
              {title}
            </div>
          </PortalWrapper>
        </Portal>
      )}
    </React.Fragment>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.node,
}

export default Tooltip
