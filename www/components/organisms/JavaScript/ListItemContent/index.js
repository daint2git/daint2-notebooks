import React from 'react'
import PropTypes from 'prop-types'

import withRepeator from 'components/utils/hocs/withRepeater'
import useTitleLinksFromHeaders from 'components/utils/hooks/useTitleLinksFromHeaders'
import ItemContent from 'components/organisms/JavaScript/ItemContent'

const ItemContents = withRepeator(ItemContent)

function ListItemContent({ contents }) {
  const headers = contents.map(content => content.header)

  useTitleLinksFromHeaders(headers)

  return <ItemContents list={contents} />
}

ListItemContent.propTypes = {
  contents: PropTypes.array,
}

export default ListItemContent
