import { JavaScriptIcon, HtmlIcon, CssIcon, OtherFileIcon } from 'components/atoms/Icon/languages'

import PrefixBorderIcon from './PrefixBorderIcon'

const menus = [
  {
    id: 'javascript',
    path: '/javascript',
    icon: JavaScriptIcon,
    label: 'JavaScript (JS)',
    level: 1,
    children: [
      {
        id: 'javascript/array',
        path: '/javascript/array',
        icon: PrefixBorderIcon,
        label: 'Array',
        level: 2,
        children: null,
      },
      {
        id: 'javascript/object',
        path: '/javascript/object',
        icon: PrefixBorderIcon,
        label: 'Object',
        level: 2,
        children: null,
      },
    ],
  },
  {
    id: 'html',
    path: '/html',
    icon: HtmlIcon,
    label: 'Html',
    level: 1,
    children: null,
  },
  {
    id: 'css',
    path: '/css',
    icon: CssIcon,
    label: 'Css',
    level: 1,
    children: null,
  },
  {
    id: 'other',
    path: '/other',
    icon: OtherFileIcon,
    label: 'Other',
    level: 1,
    children: null,
  },
]

export default menus
