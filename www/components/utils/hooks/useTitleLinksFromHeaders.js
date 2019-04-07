import { useContext, useEffect } from 'react'

import TitleLinksContext from 'context/TitleLinksContext'

function useTitleLinksFromHeaders(headers) {
  const { titles, setTitles } = useContext(TitleLinksContext)

  useEffect(() => {
    if (
      titles.length !== headers.length ||
      titles.every((title, index) => title !== headers[index])
    ) {
      setTitles(headers)
    }
  }, [headers, titles, setTitles])

  return { headers, titles, setTitles }
}

export default useTitleLinksFromHeaders
