import React, { useEffect } from 'react'
import { createConnection } from './myChat'

const MyChatRoom = () => {
    useEffect(() => {
        const connection = createConnection('ws://localhost:8080/chat');
        connection.connect();

        return () => {
            connection.disconnect();        }
    }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h2>Welcome to the chat!</h2>
    </div>
  )
}

export default MyChatRoom
