import withInjectSrc from './withInjectSrc'
import javascript from './svg/languages/javascript.svg'
import html from './svg/languages/html.svg'
import css from './svg/languages/css.svg'
import git from './svg/languages/git.svg'
import docker from './svg/languages/docker.svg'
import react from './svg/languages/react.svg'
import redux from './svg/languages/redux.svg'
import code from './svg/languages/code.svg'
import webProgramming from './svg/languages/web-programming.svg'

import Icon from '.'

export const JsIcon = withInjectSrc(javascript)(Icon)
export const HtmlIcon = withInjectSrc(html)(Icon)
export const CssIcon = withInjectSrc(css)(Icon)
export const ReactIcon = withInjectSrc(react)(Icon)
export const ReduxIcon = withInjectSrc(redux)(Icon)
export const GitIcon = withInjectSrc(git)(Icon)
export const DockerIcon = withInjectSrc(docker)(Icon)
export const CodeIcon = withInjectSrc(code)(Icon)
export const WebProgrammingIcon = withInjectSrc(webProgramming)(Icon)
