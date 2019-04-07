import React from 'react'
import PropTypes from 'prop-types'

import PageContext from './PageContext'

const PageProvider = ({ children, currentPage }) => {
  return <PageContext.Provider value={{ currentPage }}>{children}</PageContext.Provider>
}

PageProvider.propTypes = {
  children: PropTypes.node,
  currentPage: PropTypes.object,
}

PageProvider.defaultProps = {
  currentPage: {
    asPath: '',
    pathname: '',
  },
}

export default PageProvider
