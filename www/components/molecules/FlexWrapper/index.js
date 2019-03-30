import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const FlexWrapper = ({ children, className, direction, ...other }) => (
  <div className={cssModules`root ${className} ${direction}`} {...other}>
    {children}
  </div>
)

FlexWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']),
}

FlexWrapper.defaultProps = {
  direction: 'row',
}

export default FlexWrapper
