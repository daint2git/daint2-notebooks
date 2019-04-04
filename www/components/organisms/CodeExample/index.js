import React from 'react'
import PropTypes from 'prop-types'
import stripIndent from 'common-tags/lib/stripIndent'

import MultipleLinesOfText from 'components/atoms/MultipleLinesOfText'
import CodeHighlighter from 'components/molecules/CodeHighlighter'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function CodeExample(props) {
  const { children, language } = props
  const [input, output] = children

  return (
    <div className={cssModules`root`}>
      <div className={cssModules`input`}>
        <CodeHighlighter language={language}>{input}</CodeHighlighter>
      </div>
      <div className={cssModules`output`}>
        <div className={cssModules`content`}>
          <MultipleLinesOfText>{stripIndent`${output}`}</MultipleLinesOfText>
        </div>
      </div>
    </div>
  )
}

CodeExample.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  language: PropTypes.string,
}

export default CodeExample
