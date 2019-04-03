import {
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  GitIcon,
  DockerIcon,
  OtherFileIcon,
} from 'components/atoms/Icon/languages'
import { DevelopIcon } from 'components/atoms/Icon'

import PrefixBorderIcon from './PrefixBorderIcon'

const menus = [
  {
    id: 'javascript',
    path: '/javascript',
    icon: JavaScriptIcon,
    label: 'JavaScript (Js)',
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
    id: 'git',
    path: '/git',
    icon: GitIcon,
    label: 'Git',
    level: 1,
    children: null,
  },
  {
    id: 'docker',
    path: '/docker',
    icon: DockerIcon,
    label: 'Docker',
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
  {
    id: 'about',
    path: '/about',
    icon: DevelopIcon,
    label: 'About',
    level: 1,
    children: null,
  },
]

export default menus
