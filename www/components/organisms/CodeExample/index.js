import React from 'react'
import PropTypes from 'prop-types'

import isString from 'components/utils/helpers/isString'
import renderNothing from 'components/utils/hocs/renderNothing'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import MultilineText from 'components/atoms/MultilineText'
import CodeHighlighter from 'components/molecules/CodeHighlighter'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function CodeExample(props) {
  const { language, input, output, style } = props

  if (!input && !output) {
    return null
  }

  let Ouput

  switch (language) {
    case 'js':
      Ouput = () => (
        <div className={cssModules`js`}>
          <MultilineText>{output}</MultilineText>
        </div>
      )
      break
    case 'css':
      Ouput = () => (
        <div className={cssModules`css`}>
          <div style={style}>
            {isString(output) ? <MultilineText>{output}</MultilineText> : output}
          </div>
        </div>
      )
      break
    default:
      Ouput = renderNothing
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
          <Ouput />
        </div>
      )}
    </div>
  )
}

CodeExample.propTypes = {
  language: PropTypes.string,
  input: PropTypes.string,
  output: PropTypes.node,
  style: PropTypes.object,
}

CodeExample.defaultProps = {
  language: 'js',
}

export default CodeExample
