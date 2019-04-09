import React from 'react'

import cssModuleNameTag from 'components/utils/cssModuleNameTag'
import FlexContainer from 'components/atoms/FlexContainer'
import Heading from 'components/atoms/Heading'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function SkillsBar() {
  return (
    <div className={cssModules`skills`}>
      <div>
        <Heading component="h4">
          <FlexContainer vertical="between">
            <span>JAVASCRIPT (core, special ES6)</span>
            <span className={cssModules`percent`}>70%</span>
          </FlexContainer>
        </Heading>
        <span className={cssModules`bar`}>
          <span className={cssModules`javascript`} />
        </span>
      </div>
      <div>
        <Heading component="h4">
          <FlexContainer vertical="between">
            <span>HTML</span>
            <span className={cssModules`percent`}>60%</span>
          </FlexContainer>
        </Heading>
        <span className={cssModules`bar`}>
          <span className={cssModules`html`} />
        </span>
      </div>
      <div>
        <Heading component="h4">
          <FlexContainer vertical="between">
            <span>CSS, SCSS</span>
            <span className={cssModules`percent`}>60%</span>
          </FlexContainer>
        </Heading>
        <span className={cssModules`bar`}>
          <span className={cssModules`css`} />
        </span>
      </div>
      <div>
        <Heading component="h4">
          <FlexContainer vertical="between">
            <span>REACTJS</span>
            <span className={cssModules`percent`}>80%</span>
          </FlexContainer>
        </Heading>
        <span className={cssModules`bar`}>
          <span className={cssModules`reactjs`} />
        </span>
      </div>
      <div>
        <Heading component="h4">
          <FlexContainer vertical="between">
            <span>WEBPACK, BABEL</span>
            <span className={cssModules`percent`}>30%</span>
          </FlexContainer>
        </Heading>
        <span className={cssModules`bar`}>
          <span className={cssModules`webpack`} />
        </span>
      </div>
      <div>
        <Heading component="h4">
          <FlexContainer vertical="between">
            <span>NODEJS</span>
            <span className={cssModules`percent`}>30%</span>
          </FlexContainer>
        </Heading>
        <span className={cssModules`bar`}>
          <span className={cssModules`nodejs`} />
        </span>
      </div>
      <div>
        <Heading component="h4">
          <FlexContainer vertical="between">
            <span>DOCKER</span>
            <span className={cssModules`percent`}>30%</span>
          </FlexContainer>
        </Heading>
        <span className={cssModules`bar`}>
          <span className={cssModules`docker`} />
        </span>
      </div>
      <div>
        <Heading component="h4">
          <FlexContainer vertical="between">
            <span>JAVA</span>
            <span className={cssModules`percent`}>40%</span>
          </FlexContainer>
        </Heading>
        <span className={cssModules`bar`}>
          <span className={cssModules`java`} />
        </span>
      </div>
    </div>
  )
}

export default SkillsBar
