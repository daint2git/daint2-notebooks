import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/atoms/Button'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const IconButton = React.forwardRef(function IconButton(props, ref) {
  const { children, icon, direction, ...other } = props
  return (
    <Button ref={ref} {...other}>
      <div className={cssModules`content ${direction}`}>
        {icon}
        {children}
      </div>
    </Button>
  )
})

IconButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  direction: PropTypes.oneOf(['row', 'column']),
}

IconButton.defaultProps = {
  children: null,
  icon: null,
  direction: 'row',
}

export default IconButton
