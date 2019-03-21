import React from 'react'
import Link from 'next/link'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const LandingPage = () => (
  <div className={cssModules`container`}>
    <div className={cssModules`content`}>
      <h1>DaiNT2 notebooks</h1>
      <p>
        I am a Front-end Web Developer at FPT software. I have a passion with
        front-end technologies. When I have free time, I often read, study and
        share my knowledge for everyone.
      </p>
      <Link href="/home">
        <a>Get Started</a>
      </Link>
    </div>
  </div>
)

export default LandingPage
