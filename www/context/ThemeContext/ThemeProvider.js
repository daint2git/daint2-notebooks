import React from 'react'

import ThemeContext from './'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ThemeProvider = ({ children, initialTheme = 'light' }) => {
  const [theme, changeTheme] = React.useState(initialTheme)
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={cssModules`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
