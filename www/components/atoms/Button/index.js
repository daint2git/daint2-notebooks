import { COLORS, SIZES } from 'constants/global'

import React, { useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { setRef } from 'components/utils/helpers/reactHelpers'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const RippleAnimation = ({ rippleX, rippleY }) => (
  <span className={cssModules`animation`} style={{ left: rippleX, top: rippleY }} />
)

RippleAnimation.propTypes = {
  rippleX: PropTypes.number,
  rippleY: PropTypes.number,
}

const Button = React.forwardRef((props, outerRef) => {
  const {
    component: Component,
    children,
    className,
    color,
    size,
    variant,
    isFullWidth,
    hidden,
    ...other
  } = props

  if (hidden) {
    return null
  }

  const innerRef = useRef(null)

  const [ripple, setRipple] = useState()

  const handleMouseDown = useCallback(
    e => {
      const rect = innerRef.current.getBoundingClientRect()
      setRipple({
        rippleX: -(rect.width / 2) + Math.round(e.clientX - rect.left),
        rippleY: -(rect.height / 2) + Math.round(e.clientY - rect.top),
      })
    },
    [innerRef],
  )

  return (
    <Component
      className={cssModules`root ${color} ${size} ${className}`}
      data-variant={variant}
      data-full-width={isFullWidth}
      onMouseDown={handleMouseDown}
      ref={ref => {
        setRef(innerRef, ref)
        setRef(outerRef, ref)
      }}
      {...other}
    >
      <span>{children}</span>
      <RippleAnimation {...ripple} />
    </Component>
  )
})

Button.propTypes = {
  component: PropTypes.elementType,
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([...COLORS, 'transparent']),
  size: PropTypes.oneOf(SIZES),
  variant: PropTypes.oneOf(['outline', 'text']),
  isFullWidth: PropTypes.bool,
  hidden: PropTypes.bool,
}

Button.defaultProps = {
  component: 'button',
  type: 'button',
  color: 'primary',
  size: 'medium',
  isFullWidth: false,
  hidden: false,
}

export default Button
