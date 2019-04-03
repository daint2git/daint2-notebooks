import React from 'react'

import getDisplayName from 'components/utils/getDisplayName'

const withInjectSrc = svg => WrappedComponent => {
  const WithInjectSrc = React.forwardRef((props, ref) => (
    <WrappedComponent src={svg} ref={ref} {...props} />
  ))
  WithInjectSrc.displayName = `withInjectSrc(${getDisplayName(WrappedComponent)})`
  return WithInjectSrc
}

export default withInjectSrc
