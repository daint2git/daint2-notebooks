import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TitleLinksContext from './TitleLinksContext'

const TitleLinksProvider = ({ children, initialTitles }) => {
  const [titles, setTitles] = useState(initialTitles)
  return (
    <TitleLinksContext.Provider value={{ titles, setTitles }}>
      {children}
    </TitleLinksContext.Provider>
  )
}

TitleLinksProvider.propTypes = {
  children: PropTypes.node,
  initialTitles: PropTypes.array,
}

TitleLinksProvider.defaultProps = {
  initialTitles: [],
}

export default TitleLinksProvider
