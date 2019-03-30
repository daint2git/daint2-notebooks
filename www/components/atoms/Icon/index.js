import React from 'react'

import withInjectSrc from './withInjectSrc'
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

const Icon = React.forwardRef((props, ref) => <img alt="icon" {...props} ref={ref} />)

export default Icon

// 14
export const AdminIcon = withInjectSrc(admin)(Icon)
export const EditorIcon = withInjectSrc(editor)(Icon)
export const ViewerIcon = withInjectSrc(viewer)(Icon)
export const PenIcon = withInjectSrc(pen)(Icon)
export const CalendarIcon = withInjectSrc(calendar)(Icon)

// 20
export const SearchIcon = withInjectSrc(search)(Icon)
export const AlertIcon = withInjectSrc(alert)(Icon)
export const CommentIcon = withInjectSrc(comment)(Icon)
export const HelpIcon = withInjectSrc(help)(Icon)
