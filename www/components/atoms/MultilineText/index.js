import React from 'react'
import PropTypes from 'prop-types'
import stripIndent from 'common-tags/lib/stripIndent'

function MultilineText(props) {
  const { children } = props
  const lines = stripIndent`${children}`.split('\n')
  return (
    <React.Fragment>
      {lines.map((line, index) => (
        /* eslint-disable react/no-array-index-key */
        <React.Fragment key={`line-${index}`}>
          {line}
          {lines.length - 1 !== index && <br />}
        </React.Fragment>
        /* eslint-enable react/no-array-index-key */
      ))}
    </React.Fragment>
  )
}

MultilineText.propTypes = {
  children: PropTypes.string.isRequired,
}

export default MultilineText
