import { useContext, useEffect } from 'react'

import AnchorLinksContext from 'context/AnchorLinksContext'

export const createAnchorId = str => `${str.replace(/ /g, '-').toLowerCase()}`

function useAnchorLinks(titles) {
  const { anchors, setAnchors } = useContext(AnchorLinksContext)

  useEffect(() => {
    if (titles.length !== anchors.length) {
      const nextAnchors = titles.map(title => ({
        id: createAnchorId(title),
        title,
      }))

      setAnchors(nextAnchors)
    }
  }, [anchors.length, setAnchors, titles])

  return { anchors }
}

export default useAnchorLinks
