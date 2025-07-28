import React, { useState, useEffect } from 'react'
import { createConnection } from './Chat4'

const serverUrl = "https://smart-chat-server.com";

const ChatApp3 = () => {
    const [roomID, setRoomID] = useState('Science');

  return (
    <div>
        <label htmlFor="">
            Choose the chat room:{" "}
            <select value={roomID} onChange={(e) => setRoomID(e.target.value)}>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
            </select>
        </label>
        <hr />
        <ChatRoom roomID={roomID} />
    </div>
  )
}

export default ChatApp3


const ChatRoom = ({ roomID }) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomID: roomID,
        }
        const connection = createConnection(options);
        connection.connect();

        return () => connection.disconnect();
    }, [roomID]);

    return (
        <div>
            <h1>Welcome to the {roomID} room!</h1>
            <input 
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
    )
}