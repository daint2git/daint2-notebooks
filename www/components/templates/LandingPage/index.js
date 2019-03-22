import React from 'react'
import Link from 'next/link'

import { Javascript, Html, Css, File } from 'components/atoms/Icon/languages'
import StickySocialBar from 'components/molecules/StickySocialBar'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const LandingPage = () => (
  <div>
    <div className={cssModules`container`}>
      <div className={cssModules`information`}>
        <h1>DaiNT2 notebooks</h1>
        <p>
          My name is Nguyen Tran Dai. I am a Front-end Web Developer. I have a
          passion with front-end technologies. When I have free time, I often
          read, study and share my knowledge for everyone.
        </p>
        <a href="#content">Get Started</a>
      </div>
    </div>
    <div id="content" className={cssModules`content`}>
      <div className={cssModules`box`}>
        <div className={cssModules`box-content`}>
          <Javascript width={75} height={75} />
          <h3>JavaScript</h3>
          <a href="#">Read More</a>
        </div>
      </div>

      <div className={cssModules`box`}>
        <div className={cssModules`box-content`}>
          <Html width={75} height={75} />
          <h3>Html</h3>
          <a href="#">Read More</a>
        </div>
      </div>

      <div className={cssModules`box`}>
        <div className={cssModules`box-content`}>
          <Css width={75} height={75} />
          <h3>Css</h3>
          <a href="#">Read More</a>
        </div>
      </div>

      <div className={cssModules`box`}>
        <div className={cssModules`box-content`}>
          <File width={75} height={75} />
          <h3>Other</h3>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    <StickySocialBar />
  </div>
)

export default LandingPage
