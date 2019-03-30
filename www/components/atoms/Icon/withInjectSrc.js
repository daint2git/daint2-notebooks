import React from 'react'

import getDisplayName from 'components/utils/getDisplayName'

const withInjectSrc = svg => WrappedComponent => {
  const WithInjectSrc = React.forwardRef((props, ref) => (
    <WrappedComponent {...props} src={svg} ref={ref} />
  ))
  WithInjectSrc.displayName = `withInjectSrc(${getDisplayName(WrappedComponent)})`
  return WithInjectSrc
}

export default withInjectSrc
