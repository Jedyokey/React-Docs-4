import React, { useState, useEffect } from 'react'
// import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createConnection } from './Chat3';
import { showNotification } from './notification';

const serverUrl = 'https://example.com/chat';

const ChatApp2 = () => {
    const [roomID, setRoomID] = useState('general');
    const [isDark, setIsDark] = useState(false);

  return (
    <div>
        <label htmlFor="">
            Choose the chat room:{" "}
            <select value={roomID} onChange={(e) => setRoomID(e.target.value)} >
                <option value="General">General</option>
                <option value="Travel">Travel</option>
                <option value="Music">Music</option>
            </select>
        </label><br /><br />
      
        <label htmlFor="">
            <input 
                type="checkbox"
                value={isDark}
                onChange={(e) => setIsDark(e.target.checked)}
            />
            Use dark theme
        </label>
        <hr />
        <ChatRoom roomID={roomID} theme={isDark ? "dark" : "light"} />
    </div>
  )
}

export default ChatApp2


const ChatRoom = ({ roomID, theme }) => {
    // const onConnected = useEffectEvent(() => {
    //     showNotification("Connected!", theme);
    // });

    useEffect(() => {
        const connection = createConnection(serverUrl, roomID);
        connection.on("connected", () => {
            showNotification("Connected!", theme);
            // onConnected();
        });
        connection.connect();

        return () => connection.disconnect();
    }, [roomID]);

    return (
        <h1>Welcome to the {roomID} room!</h1>
    )
}