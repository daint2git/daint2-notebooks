import React from 'react'
import { storiesOf } from '@storybook/react'

import { Admin, Editor, Viewer, Pen, Calendar } from '../'
import { Search, Alert, Comment, Help } from '../'

const Wrapper = ({ children }) => {
  return React.Children.map(children, icon => (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: '10px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          padding: '10px',
          border: '1px solid #ebebeb',
          borderRadius: '4px',
          marginRight: '4px',
        }}
      >
        {React.cloneElement(icon)}
      </div>
      <span style={{ color: '#666' }}>{icon.props.alt}</span>
    </div>
  ))
}

storiesOf('Icon', module)
  .add('Icon size=14', () => (
    <Wrapper>
      <Admin alt="admin" />
      <Editor alt="editor" />
      <Viewer alt="viewer" />
      <Pen alt="pen" />
      <Calendar alt="calendar" />
    </Wrapper>
  ))
  .add('Icon size=20', () => (
    <Wrapper>
      <Search alt="search" />
      <Alert alt="alert" />
      <Comment alt="comment" />
      <Help alt="help" />
    </Wrapper>
  ))
