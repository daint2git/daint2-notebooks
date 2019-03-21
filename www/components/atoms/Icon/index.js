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

const Icon = props => <img alt="icon" {...props} />

const withInjectSrc = svg => {
  const WithInjectSrc = props => <Icon {...props} src={svg} />
  WithInjectSrc.displayName = `withInjectSrc(${getDisplayName(Icon)})`
  return WithInjectSrc
}

export default withInjectSrc

// 14
export const Admin = withInjectSrc(admin)
export const Editor = withInjectSrc(editor)
export const Viewer = withInjectSrc(viewer)
export const Pen = withInjectSrc(pen)
export const Calendar = withInjectSrc(calendar)

// 20
export const Search = withInjectSrc(search)
export const Alert = withInjectSrc(alert)
export const Comment = withInjectSrc(comment)
export const Help = withInjectSrc(help)
