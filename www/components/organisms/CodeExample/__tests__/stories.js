import React from 'react'
import { storiesOf } from '@storybook/react'

import CodeExample from '..'

storiesOf('CodeExample', module)
  .add('default', () => <CodeExample />)
  .add('with input + output', () => (
    <CodeExample
      input={`
        Array.from('foo')
        Array.from([1, 2, 3], x => x + x)
        Array.from({ length: 10 }, (v, k) => k).map(k => k)
      `}
      output={`
        ["f", "o", "o"]
        [2, 4, 6]
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      `}
    />
  ))
  .add('with input only', () => (
    <CodeExample
      input={`
        Array.from('foo')
        Array.from([1, 2, 3], x => x + x)
        Array.from({ length: 10 }, (v, k) => k).map(k => k)
      `}
    />
  ))
  .add('with output only', () => (
    <CodeExample
      output={`
        ["f", "o", "o"]
        [2, 4, 6]
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      `}
    />
  ))
