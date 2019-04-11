import React, { useContext } from 'react'

import AnchorLinksContext from 'context/AnchorLinksContext'
import SideBarContext from 'context/SideBarContext'
import BaseLink from 'components/atoms/BaseLink'
import Heading from 'components/atoms/Heading'
import MenuList, { MenuItem } from 'components/molecules/MenuList'
import SideBar from 'components/molecules/SideBar'

const renderMenuItems = anchors =>
  anchors.map(anchor => (
    <MenuItem key={anchor.id} style={{ padding: '0.5rem 0' }}>
      <BaseLink href={`#${anchor.id}`} title={anchor.title}>
        {anchor.title}
      </BaseLink>
    </MenuItem>
  ))

function RightBar() {
  const { anchors } = useContext(AnchorLinksContext)
  const { opened } = useContext(SideBarContext)
  return (
    <SideBar opened={opened}>
      <Heading component="h3">Contents</Heading>
      <MenuList>{renderMenuItems(anchors)}</MenuList>
    </SideBar>
  )
}

export default RightBar
