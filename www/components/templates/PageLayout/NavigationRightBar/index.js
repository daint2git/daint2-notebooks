import React, { useContext } from 'react'

import TitlesOnRightBarContext from 'context/TitlesOnRightBarContext'
import Heading from 'components/atoms/Heading'
import BaseLink from 'components/atoms/BaseLink'
import SideBar from 'components/molecules/SideBar'
import MenuList, { MenuItem } from 'components/molecules/MenuList'

const renderMenuItems = titles =>
  titles.map(title => (
    <MenuItem key={title}>
      <BaseLink href={`#${title}`}>{title}</BaseLink>
    </MenuItem>
  ))

function NavigationRightBar() {
  const { titles } = useContext(TitlesOnRightBarContext)
  return (
    <SideBar>
      <Heading component="h3">Contents</Heading>
      <MenuList>{renderMenuItems(titles)}</MenuList>
    </SideBar>
  )
}

export default NavigationRightBar
