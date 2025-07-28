import React from 'react'
import Counter from "../components/EscapeHatches/Counter"
import FormInput from '../components/EscapeHatches/FormInput'
import VideoApp from '../components/EscapeHatches/VideoApp'
import ChatApp from '../components/EscapeHatches/ChatApp'
import { ChatRoomApp } from '../components/EscapeHatches/ChatRoom'
import ChatApp2 from '../components/EscapeHatches/ChatApp2'
import ChatApp3 from '../components/EscapeHatches/ChatApp3'
import CanvasApp from '../components/EscapeHatches/CanvasApp'

const EscapeHatches = () => {
  return (
    <div>
        <Counter />
        <FormInput />
        <VideoApp />
        <ChatApp />
        <ChatRoomApp />
        <ChatApp2 />
        <ChatApp3 />
        <CanvasApp />
    </div>
  )
}

export default EscapeHatches
