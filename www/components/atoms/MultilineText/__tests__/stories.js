import React from 'react'
import { storiesOf } from '@storybook/react'
import { stripIndent, stripIndents } from 'common-tags'

import MultilineText from '..'

storiesOf('MultilineText', module)
  .add('default', () => (
    <MultilineText>
      {`      Lorem Ipsum(\\n)is simply dummy text of the printing and typesetting industry.
                  <br />zzz
          PageMaker including versions of Lorem Ipsum`}
    </MultilineText>
  ))
  .add('with use stripIndent function', () => (
    <MultilineText>
      {stripIndent`      Lorem Ipsum(\\n)is simply dummy text of the printing and typesetting industry.
                  <br />zzz
          PageMaker including versions of Lorem Ipsum`}
    </MultilineText>
  ))
  .add('with use stripIndents function', () => (
    <MultilineText>
      {stripIndents`      Lorem Ipsum(\\n)is simply dummy text of the printing and typesetting industry.
                  <br />zzz
          PageMaker including versions of Lorem Ipsum`}
    </MultilineText>
  ))
  .add('with oneline', () => (
    <MultilineText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </MultilineText>
  ))
