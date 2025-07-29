import React from 'react'
import NewCounter from '../components/ReferencingValues/NewCounter'
import ChatChallenge from '../components/ReferencingValues/ChatChallenge'
import ToggleChallenge from '../components/ReferencingValues/ToggleChallenge'
import Dashboard from '../components/ReferencingValues/Challenge3'
import NewChat from '../components/ReferencingValues/Challenge4'

const Referencing = () => {
  return (
    <div>
        <h2>Referencing Values with Refs</h2>
        <NewCounter />
        <ChatChallenge />
        <ToggleChallenge />
        <Dashboard />
        <NewChat />
    </div>
  )
}

export default Referencing
