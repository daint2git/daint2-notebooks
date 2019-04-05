import React, { useState, useEffect } from 'react'

import arrowUp from 'components/atoms/Icon/svg/other/arrow-up.svg'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const ScrollButton = () => {
  const [isVisibled, setVisible] = useState(false)

  function check() {
    setVisible(window.pageYOffset > window.innerHeight)
  }

  function rollup() {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', check)

    return () => {
      window.removeEventListener('scroll', check)
    }
  })

  return (
    <div className={cssModules`root`} data-visible={isVisibled} onScroll={check} onClick={rollup}>
      <img src={arrowUp} alt="arrow-up" />
    </div>
  )
}

export default ScrollButton
