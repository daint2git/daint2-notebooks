import React from 'react'
import PropTypes from 'prop-types'

import withRepeator from 'components/utils/hocs/withRepeater'
import useAnchorLinks from 'components/utils/hooks/useAnchorLinks'
import Item from 'components/organisms/cssContent/Item'

const Items = withRepeator(Item)

function List({ contents }) {
  const titles = contents.map(content => content.title)
  useAnchorLinks(titles)
  return <Items list={contents} />
}

List.propTypes = {
  contents: PropTypes.array,
}

export default List
