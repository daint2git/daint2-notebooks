import React from 'react'

import getDisplayName from 'components/utils/hocs/utils/getDisplayName'

const withInjectDimension = (width, height) => WrappedComponent => {
  const WithInjectDimension = React.forwardRef((props, ref) => (
    <WrappedComponent width={width} height={height} ref={ref} {...props} />
  ))
  WithInjectDimension.displayName = `withInjectDimension(${getDisplayName(WrappedComponent)})`
  return WithInjectDimension
}

export default withInjectDimension
