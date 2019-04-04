import React from 'react'
import PropTypes from 'prop-types'

import { COLORS, SIZES } from 'components/constants/global'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Text = React.forwardRef((props, ref) => {
  const {
    component: Component,
    className,
    color,
    size,
    weight,
    align,
    transform,
    decoration,
    hasEllipsis,
    innerHtml,
    ...other
  } = props

  if (innerHtml) {
    other.dangerouslySetInnerHTML = { __html: innerHtml }
  }
  return (
    <Component
      className={cssModules`root ${color} ${size} ${weight} ${align} ${transform} ${decoration} ${className}`}
      data-ellipsis={hasEllipsis}
      ref={ref}
      {...other}
    />
  )
})

Text.propTypes = {
  component: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.oneOf([...COLORS, 'light', 'dark']),
  size: PropTypes.oneOf([...SIZES, 'x_large']),
  weight: PropTypes.oneOf(['bold', 'lighter', 'bolder']),
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  transform: PropTypes.oneOf(['uppercase', 'lowercase', 'capitalize']),
  decoration: PropTypes.oneOf(['overline', 'underline', 'line-through']),
  hasEllipsis: PropTypes.bool,
  innerHtml: PropTypes.node,
}

Text.defaultProps = {
  component: 'p',
  align: 'left',
  color: 'dark',
  size: 'medium',
}

export default Text
