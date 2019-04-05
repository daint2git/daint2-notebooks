import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const FlexContainer = React.forwardRef((props, ref) => {
  const { children, className, wrap, direction, vertical, horizontal, isInline, ...other } = props
  return (
    <div
      className={cssModules`root ${className} ${wrap} ${direction}`}
      data-vertical={vertical}
      data-horizontal={horizontal}
      data-inline={isInline}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  )
})

FlexContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  isInline: PropTypes.bool,
}

FlexContainer.defaultProps = {
  isInline: false,
}

export default FlexContainer
