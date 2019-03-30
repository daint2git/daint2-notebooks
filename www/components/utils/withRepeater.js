import React from 'react'

import getDisplayName from './getDisplayName'
import setDisplayName from './setDisplayName'
import hash from './fnv-hash'
import either from './either'

const keyGenerator = (props = {}) => hash(JSON.stringify(props))

const withRepeater = (WrappedComponent, propName = 'list') => {
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
