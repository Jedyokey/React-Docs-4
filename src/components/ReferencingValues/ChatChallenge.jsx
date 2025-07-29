import React, { useState, useRef } from 'react'

const ChatChallenge = () => {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const timeoutID = useRef(null);

    const handleSend = () => {
        // Check if input is empty
        if (text.trim() === "") {
            alert("Please enter a message before sending.");
            return; // Stop the rest of the function
        }

        setIsSending(true);
        timeoutID.current = setTimeout(() => {
            alert(`Message sent successfully: ${text}`);
            setText('');
            setIsSending(false);
        }, 3000); // Simulate a 3-second delay for sending the message
    }

    const handleUndo = () => {
        if (timeoutID.current) {
            clearTimeout(timeoutID.current);
            setIsSending(false);
            alert("Message sending cancelled.");
        }
    }

  return (
    <div>
        <h2>Challenge 1 of 4: Fix a broken chat input</h2>

        <input 
            type="text"
            disabled={isSending}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button disabled={isSending} onClick={handleSend}>
            {isSending ? "Sending..." : "Send"}
        </button>

        {isSending && 
            <button onClick={handleUndo} style={{ marginLeft: "10px" }}>
                Undo
            </button>
        }
      
    </div>
  )
}

export default ChatChallenge
