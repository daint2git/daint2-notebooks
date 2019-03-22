import React, { useState } from 'react'

import ThemeContext from './'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ThemeProvider = ({ children, initialTheme = 'light' }) => {
  const [theme, setTheme] = useState(initialTheme)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={cssModules`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
