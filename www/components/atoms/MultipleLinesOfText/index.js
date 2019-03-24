import React from 'react'
import PropTypes from 'prop-types'

const MultipleLinesOfText = ({ children }) => {
  const lines = children.split('\n')
  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={`line-${index}`}>
          {line}
          {lines.length - 1 !== index && <br />}
        </React.Fragment>
      ))}
    </>
  )
}

MultipleLinesOfText.propTypes = {
  children: PropTypes.string.isRequired,
}

export default MultipleLinesOfText
