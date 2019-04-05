import React from 'react'
import PropTypes from 'prop-types'
import stripIndent from 'common-tags/lib/stripIndent'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import MultipleLinesOfText from 'components/atoms/MultipleLinesOfText'
import CodeHighlighter from 'components/molecules/CodeHighlighter'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function CodeExample(props) {
  const { language, input, output } = props

  if (!input && !output) {
    return null
  }

  return (
    <div className={cssModules`root`}>
      {input && (
        <div className={cssModules`input`}>
          <CodeHighlighter language={language}>{input}</CodeHighlighter>
        </div>
      )}
      {input && output && <div className={cssModules`side-spacer`} />}
      {output && (
        <div className={cssModules`output`}>
          <div className={cssModules`content`}>
            <MultipleLinesOfText>{stripIndent`${output}`}</MultipleLinesOfText>
          </div>
        </div>
      )}
    </div>
  )
}

CodeExample.propTypes = {
  language: PropTypes.string,
  input: PropTypes.string,
  output: PropTypes.string,
}

export default CodeExample
