import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const MultipleLinesOfText = ({ children }) => {
  const lines = children.split('\n')
  return (
    <>
      {lines.length === 1
        ? children
        : lines.map((line, index) => (
            <Fragment key={`line-${index}`}>
              {line}
              {lines.length - 1 !== index && <br />}
            </Fragment>
          ))}
    </>
  )
}

MultipleLinesOfText.propTypes = {
  children: PropTypes.string.isRequired,
}

export default MultipleLinesOfText
