import React from 'react'
import PropTypes from 'prop-types'

import Heading from 'components/atoms/Heading'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Article(props) {
  const { children, className, title } = props
  return (
    <article className={cssModules`root ${className}`}>
      <header>
        <Heading component="h1" id={title}>
          {title}
        </Heading>
      </header>
      <div className={cssModules`content`}>{children}</div>
    </article>
  )
}

Article.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
}

export default Article
