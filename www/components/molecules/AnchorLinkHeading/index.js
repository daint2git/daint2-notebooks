import React from 'react'
import PropTypes from 'prop-types'

import BaseLink from 'components/atoms/BaseLink'
import Heading from 'components/atoms/Heading'

function AnchorLinkHeading(props) {
  const { children, ...other } = props
  return (
    <Heading {...other}>
      <BaseLink variant="anchor" id={children} />
      {children}
    </Heading>
  )
}

AnchorLinkHeading.propTypes = {
  children: PropTypes.string.isRequired,
}

export default AnchorLinkHeading
