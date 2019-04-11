import React, { useState } from 'react'
import PropTypes from 'prop-types'

import AnchorLinksContext from './AnchorLinksContext'

function AnchorLinksProvider(props) {
  const { children, initialAnchors } = props
  const [anchors, setAnchors] = useState(initialAnchors)
  return (
    <AnchorLinksContext.Provider value={{ anchors, setAnchors }}>
      {children}
    </AnchorLinksContext.Provider>
  )
}

AnchorLinksProvider.propTypes = {
  children: PropTypes.node,
  initialAnchors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
}

AnchorLinksProvider.defaultProps = {
  initialAnchors: [],
}

export default AnchorLinksProvider
