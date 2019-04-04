import React from 'react'
import PropTypes from 'prop-types'

import TitlesOnRightBarContext from './TitlesOnRightBarContext'

const TitlesOnRightBarProvider = ({ children, initialTitles }) => {
  const [titles, setTitles] = React.useState(initialTitles)
  return (
    <TitlesOnRightBarContext.Provider value={{ titles, setTitles }}>
      {children}
    </TitlesOnRightBarContext.Provider>
  )
}

TitlesOnRightBarProvider.propTypes = {
  children: PropTypes.node,
  initialTitles: PropTypes.array,
}

TitlesOnRightBarProvider.defaultProps = {
  initialTitles: [],
}

export default TitlesOnRightBarProvider
