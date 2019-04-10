import React from 'react'
import PropTypes from 'prop-types'
import stripIndent from 'common-tags/lib/stripIndent'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-jsx.min'

/* eslint-disable react/no-danger */
function CodeHighlighter(props) {
  const { children, language } = props
  const highlightedCode = highlight(stripIndent`${children}`, languages[language])
  return (
    <div>
      <pre
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  )
}
/* eslint-enable react/no-danger */

CodeHighlighter.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.oneOf(['js', 'jsx', 'html', 'css']),
}

CodeHighlighter.defaultProps = {
  language: 'js',
}

export default CodeHighlighter
