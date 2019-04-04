import React, { useContext, useEffect } from 'react'

import TitlesOnRightBarContext from 'context/TitlesOnRightBarContext'
import withRepeator from 'components/utils/withRepeater'
import ItemContent from 'components/organisms/JavaScript/ItemContent'

import contentPage from './contentPage'

const ItemContents = withRepeator(ItemContent)

function Basic() {
  const headers = contentPage.map(example => example.header)
  const { titles, setTitles } = useContext(TitlesOnRightBarContext)

  useEffect(() => {
    if (
      titles.length !== headers.length ||
      titles.every((title, index) => title !== headers[index])
    ) {
      setTitles(headers)
    }
  }, [headers, titles, setTitles])

  return <ItemContents list={contentPage} />
}

export default Basic
