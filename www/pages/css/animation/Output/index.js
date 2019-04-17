import React from 'react'
import PropTypes from 'prop-types'

import Text from 'components/atoms/Text'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import CodeExample from 'components/organisms/CodeExample'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Output = ({ children, explain, property, value }) => (
  <>
    <Text size="large">{explain}</Text>
    <CodeExample
      language="css"
      input={`
        {
          ${property}: ${value};
        }
      `}
      output={
        <div className={cssModules`output`} style={{ [property]: value }}>
          {children}
        </div>
      }
    />
  </>
)

Output.propTypes = {
  children: PropTypes.node,
  explain: PropTypes.string,
  property: PropTypes.string,
  value: PropTypes.string,
}

export default Output
