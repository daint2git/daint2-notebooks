import withInjectSrc from './withInjectSrc'
import javascript from './svg/languages/javascript.svg'
import html from './svg/languages/html.svg'
import css from './svg/languages/css.svg'
import file from './svg/languages/file.svg'
import javascriptSolid from './svg/languages/javascript_solid.svg'
import htmlSolid from './svg/languages/html_solid.svg'
import cssSolid from './svg/languages/css_solid.svg'
import otherFileSolid from './svg/languages/other_file_solid.svg'

import Icon from '.'

export const Javascript = withInjectSrc(javascript)(Icon)
export const Html = withInjectSrc(html)(Icon)
export const Css = withInjectSrc(css)(Icon)
export const File = withInjectSrc(file)(Icon)

export const JavaScriptIcon = withInjectSrc(javascriptSolid)(Icon)
export const HtmlIcon = withInjectSrc(htmlSolid)(Icon)
export const CssIcon = withInjectSrc(cssSolid)(Icon)
export const OtherFileIcon = withInjectSrc(otherFileSolid)(Icon)
