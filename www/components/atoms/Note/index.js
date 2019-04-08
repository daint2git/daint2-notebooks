import { COLORS, SIZES } from 'constants/global'

import React from 'react'
import PropTypes from 'prop-types'

import MultilineText from 'components/atoms/MultilineText'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Note(props) {
  const { children, className, color, size, ...other } = props

  if (!children) {
    return null
  }

  return (
    <div className={cssModules`root ${color} ${size} ${className}`} {...other}>
      <MultilineText>{children}</MultilineText>
    </div>
  )
}

Note.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
}

Note.defaultProps = {
  color: 'warning',
  size: 'base-large',
}

export default Note
