import React from 'react'

import getDisplayName from 'components/utils/getDisplayName'

// 14
import admin from './svg/14/admin.svg'
import editor from './svg/14/editor.svg'
import viewer from './svg/14/viewer.svg'
import pen from './svg/14/pen.svg'
import calendar from './svg/14/calendar.svg'

// 20
import search from './svg/20/search.svg'
import alert from './svg/20/alert.svg'
import comment from './svg/20/comment.svg'
import help from './svg/20/help.svg'

const Icon = React.forwardRef(function Icon(props, ref) {
  return <img alt="icon" {...props} ref={ref} />
})

export default Icon

export const withInjectSrc = svg => {
  const WithInjectSrc = React.forwardRef(function WithInjectSrc(props, ref) {
    return <Icon {...props} src={svg} ref={ref} />
  })
  WithInjectSrc.displayName = `withInjectSrc(${getDisplayName(Icon)})`
  return WithInjectSrc
}

// 14
export const AdminIcon = withInjectSrc(admin)
export const EditorIcon = withInjectSrc(editor)
export const ViewerIcon = withInjectSrc(viewer)
export const PenIcon = withInjectSrc(pen)
export const CalendarIcon = withInjectSrc(calendar)

// 20
export const SearchIcon = withInjectSrc(search)
export const AlertIcon = withInjectSrc(alert)
export const CommentIcon = withInjectSrc(comment)
export const HelpIcon = withInjectSrc(help)
