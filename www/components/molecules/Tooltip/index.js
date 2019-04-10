import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import toPx from 'components/utils/helpers/toPx'
import Portal, { PortalWrapper } from 'components/atoms/Portal'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import noop from 'components/utils/helpers/noop'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const childrenRef = React.createRef()

function Tooltip(props) {
  const { children, className, title, onOpen, onClose, ...other } = props
  const [open, setOpen] = useState(false)

  const handleEnter = useCallback(
    event => {
      setOpen(true)
      onOpen(event)
    },
    [onOpen],
  )

  const handleLeave = useCallback(
    event => {
      setOpen(false)
      onClose(event)
    },
    [onClose],
  )

  const setTooltipStyle = useCallback(element => {
    if (element) {
      const rectOfChildren = childrenRef.current.getBoundingClientRect()
      const rectOfTooltip = element.getBoundingClientRect()

      element.style.top = toPx(
        rectOfChildren.top + rectOfChildren.height / 2 - rectOfTooltip.height / 2,
      )
      element.style.left = toPx(rectOfChildren.right + 15)
    }
  }, [])

  const childrenProps = {
    ...children.props,
    ref: childrenRef,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    ...other,
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
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
}

Tooltip.defaultProps = {
  onOpen: noop,
  onClose: noop,
}

export default Tooltip
