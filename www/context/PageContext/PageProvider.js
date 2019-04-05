import React from 'react'
import PropTypes from 'prop-types'

import PageContext from './PageContext'

const PageProvider = ({ children, activePage }) => {
  return <PageContext.Provider value={{ activePage }}>{children}</PageContext.Provider>
}

PageProvider.propTypes = {
  children: PropTypes.node,
  activePage: PropTypes.object,
}

PageProvider.defaultProps = {
  activePage: {
    asPath: '',
    pathname: '',
  },
}

export default PageProvider
