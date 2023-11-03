import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

export default function ChatsPage(props) {
  return (
    <div style={{ height : '100vh' }}>
    <PrettyChatWindow
        projectId='1112a0d4-2969-4998-8cb1-2813732afc7e'
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}} 
    />

    </div>
  )
}
