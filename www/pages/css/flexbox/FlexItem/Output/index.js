import React from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Output = ({ containerStyle, itemStyle, selectedItemStyle }) => (
  <div className={cssModules`container`} style={containerStyle}>
    <div className={cssModules`item`} style={itemStyle}>
      1
    </div>
    <div className={cssModules`item`} style={itemStyle}>
      2
    </div>
    <div className={cssModules`item`} style={{ ...itemStyle, ...selectedItemStyle }}>
      3
    </div>
    <div className={cssModules`item`} style={itemStyle}>
      4
    </div>
  </div>
)

Output.propTypes = {
  containerStyle: PropTypes.object,
  itemStyle: PropTypes.object,
  selectedItemStyle: PropTypes.object,
}

export default Output
