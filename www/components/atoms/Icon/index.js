import React from 'react'

import compose from 'components/utils/hocs/utils/compose'

import withInjectSrc from './withInjectSrc'
import withInjectDimension from './withInjectDimension'
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
// other
import menu from './svg/other/menu.svg'
import settings from './svg/other/settings.svg'
import notification from './svg/other/notification.svg'
import develop from './svg/other/develop.svg'
import dropDownArrow from './svg/other/drop-down-arrow.svg'
import aboutMe from './svg/other/about-me.svg'
import more from './svg/other/more.svg'
import question from './svg/other/question.svg'

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

export const MenuIcon = compose(
  withInjectDimension(20, 20),
  withInjectSrc(menu),
)(Icon)

export const NotificationIcon = compose(
  withInjectDimension(20, 20),
  withInjectSrc(notification),
)(Icon)

export const SettingsIcon = compose(
  withInjectDimension(20, 20),
  withInjectSrc(settings),
)(Icon)

export const QuestionIcon = compose(
  withInjectDimension(20, 20),
  withInjectSrc(question),
)(Icon)

export const DevelopIcon = withInjectSrc(develop)(Icon)

export const DropDownArrowIcon = compose(
  withInjectDimension(12, 12),
  withInjectSrc(dropDownArrow),
)(Icon)

export const AboutMeIcon = withInjectSrc(aboutMe)(Icon)

export const MoreIcon = withInjectSrc(more)(Icon)
