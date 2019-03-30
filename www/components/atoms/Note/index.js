import React from 'react'
import PropTypes from 'prop-types'

import { COLORS } from 'components/constants/global'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Note = ({ children, className, color, ...other }) => (
  <div className={cssModules`root ${color} ${className}`} {...other}>
    {children}
  </div>
)

Note.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(COLORS),
}

Note.defaultProps = {
  color: 'primary',
}

export default Note
