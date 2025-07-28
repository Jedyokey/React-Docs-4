import React, { useState, useEffect } from 'react'
import { createConnection } from './Chat'

const ChatApp = () => {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => connection.disconnect();
    }, []);

  return (
    <h1>Welcome to the chat!</h1>
  )
}

export default ChatApp
