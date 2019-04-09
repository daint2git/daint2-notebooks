import { COLORS, SIZES } from 'constants/global'

import React from 'react'
import PropTypes from 'prop-types'

import appendBr from 'components/utils/helpers/appendBr'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import MultilineText from 'components/atoms/MultilineText'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Note(props) {
  const { children, className, color, size, innerHtml, ...other } = props

  if (innerHtml) {
    other.dangerouslySetInnerHTML = { __html: appendBr(innerHtml) }
  }

  if (children) {
    other.children = <MultilineText>{children}</MultilineText>
  }

  return <div className={cssModules`root ${color} ${size} ${className}`} {...other} />
}

Note.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
  innerHtml: PropTypes.node,
}

Note.defaultProps = {
  color: 'warning',
  size: 'base-large',
}

export default Note
