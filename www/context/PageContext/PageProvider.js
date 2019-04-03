import React from 'react'
import PropTypes from 'prop-types'

import PageContext from './PageContext'

const PageProvider = ({ children, pageInfo }) => {
  return <PageContext.Provider value={{ pageInfo }}>{children}</PageContext.Provider>
}

PageProvider.propTypes = {
  children: PropTypes.node,
  pageInfo: PropTypes.object,
}

PageProvider.defaultProps = {
  pageInfo: {
    currentPath: '',
  },
}

export default PageProvider
