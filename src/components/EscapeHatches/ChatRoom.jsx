import React, { useState, useEffect } from 'react'
import { createRoomConnection } from '../../components/EscapeHatches/Chat2';

const serverUrl = "https://localhost:1234";

const ChatRoom = ({ roomID }) => {
    // Lifecycle of reactive effects 
    useEffect(() => {
        console.log("ChatRoom effect running with roomID:", roomID); // DEBUG log

        const connection = createRoomConnection(serverUrl, roomID);
        connection.connect();

        return () => connection.disconnect();
    }, [roomID])

  return (
    <h1>Welcome to the {roomID} room!</h1>
  )
}

export default ChatRoom

export const ChatRoomApp = () => {
    const [roomID, setRoomID] = useState("general");

    return (
        <div>
            <h2>Chat Room Component</h2>
            <label htmlFor="">
                Choose the Chat Room:{" "}
                <select 
                    value={roomID}
                    onChange={(e) => setRoomID(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <hr />
            <ChatRoom roomID={roomID} />
        </div>
    )
}
