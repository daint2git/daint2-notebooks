import React, { useContext } from 'react'

import TitleLinksContext from 'context/TitleLinksContext'
import SideBarContext from 'context/SideBarContext'
import BaseLink from 'components/atoms/BaseLink'
import Heading from 'components/atoms/Heading'
import MenuList, { MenuItem } from 'components/molecules/MenuList'
import SideBar from 'components/molecules/SideBar'

const renderMenuItems = titles =>
  titles.map(title => (
    <MenuItem key={title} style={{ padding: '0.5rem 0' }}>
      <BaseLink href={`#${title}`}>{title}</BaseLink>
    </MenuItem>
  ))

function RightBar() {
  const { titles } = useContext(TitleLinksContext)
  const { opened } = useContext(SideBarContext)
  return (
    <SideBar opened={opened}>
      <Heading component="h3">Contents</Heading>
      <MenuList>{renderMenuItems(titles)}</MenuList>
    </SideBar>
  )
}

export default RightBar
