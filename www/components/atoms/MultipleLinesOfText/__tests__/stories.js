import React from 'react'
import { storiesOf } from '@storybook/react'
import { stripIndent, stripIndents } from 'common-tags'

import MultipleLinesOfText from '..'

storiesOf('MultipleLinesOfText', module)
  .add('default', () => (
    <MultipleLinesOfText>
      {`      Lorem Ipsum(\\n)is simply dummy text of the printing and typesetting industry.
                  <br />zzz
          PageMaker including versions of Lorem Ipsum`}
    </MultipleLinesOfText>
  ))
  .add('with use stripIndent function', () => (
    <MultipleLinesOfText>
      {stripIndent`      Lorem Ipsum(\\n)is simply dummy text of the printing and typesetting industry.
                  <br />zzz
          PageMaker including versions of Lorem Ipsum`}
    </MultipleLinesOfText>
  ))
  .add('with use stripIndents function', () => (
    <MultipleLinesOfText>
      {stripIndents`      Lorem Ipsum(\\n)is simply dummy text of the printing and typesetting industry.
                  <br />zzz
          PageMaker including versions of Lorem Ipsum`}
    </MultipleLinesOfText>
  ))
  .add('with oneline', () => (
    <MultipleLinesOfText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </MultipleLinesOfText>
  ))
