import React from 'react'
import { storiesOf } from '@storybook/react'

import { AdminIcon, EditorIcon, ViewerIcon, PenIcon, CalendarIcon } from '..'
import { SearchIcon, AlertIcon, CommentIcon, HelpIcon } from '..'
import Icon from '..'
import mail from './../svg/20/mail.svg'

const Wrapper = ({ children }) =>
  React.Children.map(children, icon => (
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

storiesOf('Icon', module)
  .add('default', () => <Icon src={mail} />)
  .add('Icon size=14', () => (
    <Wrapper>
      <AdminIcon alt="admin" />
      <EditorIcon alt="editor" />
      <ViewerIcon alt="viewer" />
      <PenIcon alt="pen" />
      <CalendarIcon alt="calendar" />
    </Wrapper>
  ))
  .add('Icon size=20', () => (
    <Wrapper>
      <SearchIcon alt="search" />
      <AlertIcon alt="alert" />
      <CommentIcon alt="comment" />
      <HelpIcon alt="help" />
    </Wrapper>
  ))
