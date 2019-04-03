import React, { useState } from 'react'
import PropTypes from 'prop-types'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import ThemeContext from './ThemeContext'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ThemeProvider = ({ children, initialTheme }) => {
  const [theme, onThemeToggle] = useState(initialTheme)
  return (
    <ThemeContext.Provider value={{ theme, onThemeToggle }}>
      <div className={cssModules`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  initialTheme: PropTypes.oneOf(['light', 'dark']),
}

ThemeProvider.defaultProps = {
  initialTheme: 'light',
}

export default ThemeProvider
