import React from 'react'

import either from 'components/utils/helpers/either'
import hash from 'components/utils/helpers/fnv-hash'

import getDisplayName from './utils/getDisplayName'
import setDisplayName from './utils/setDisplayName'

const keyGenerator = (props = {}) => hash(JSON.stringify(props))

function withRepeater(WrappedComponent, propName = 'list') {
  const WithRepeater = props => {
    const copyProps = { ...props }
    const list = copyProps[propName]
    delete copyProps[propName]

    return (
      list && (
        <>
          {list.map(elementProps => (
            <WrappedComponent
              key={either(elementProps.key)(keyGenerator(elementProps))}
              {...elementProps}
              {...copyProps}
            />
          ))}
        </>
      )
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(`withRepeater(${getDisplayName(WrappedComponent)})`)(WithRepeater)
  }

  return WithRepeater
}

export default withRepeater
