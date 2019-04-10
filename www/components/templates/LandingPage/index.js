import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { JsIcon, HtmlIcon, CssIcon } from 'components/atoms/Icon/languages'
import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import StickySocialBar from 'components/molecules/StickySocialBar'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const LandingPage = () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
    <div className={cssModules`container`}>
      <div className={cssModules`information`}>
        <h1>DaiNT2 notebooks</h1>
        <p>
          My name is Nguyen Tran Dai. I am a FrontEnd Web Developer. I have a passion with FrontEnd
          technologies. When I have free time, I often read, study and share my knowledge for
          everyone.
        </p>
        <a href="#content">Get Started</a>
      </div>
    </div>
    <div id="content" className={cssModules`content`}>
      <Link href="/js/array">
        <div className={cssModules`box`}>
          <div className={cssModules`box-content`}>
            <JsIcon width={75} height={75} />
            <h3>Js</h3>
            <a href="/js/array">Read More</a>
          </div>
        </div>
      </Link>
      <Link href="/html/web_storage">
        <div className={cssModules`box`}>
          <div className={cssModules`box-content`}>
            <HtmlIcon width={75} height={75} />
            <h3>Html</h3>
            <a href="/html/web_storage">Read More</a>
          </div>
        </div>
      </Link>
      <Link href="/css/properties_css_for_text">
        <div className={cssModules`box`}>
          <div className={cssModules`box-content`}>
            <CssIcon width={75} height={75} />
            <h3>Css</h3>
            <a href="/css/properties_css_for_text">Read More</a>
          </div>
        </div>
      </Link>
    </div>
    <StickySocialBar />
  </div>
)

export default LandingPage
