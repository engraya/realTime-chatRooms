import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

export default function ChatsPage(props) {
  return (
    <div style={{ height : '100vh' }}>
    <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}} 
    />
    </div>
  )
}
