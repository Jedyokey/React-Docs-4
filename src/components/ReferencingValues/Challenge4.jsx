import React, { useState, useRef } from 'react'

const NewChat = () => {
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const textRef = useRef('');

    const handleSend = () => {
        // Check if input is empty
        if (text.trim() === "") {
            alert("Please enter a message before sending.");
            return; // Stop the rest of the function
        }

        clearTimeout(inputRef.current);
        inputRef.current = setTimeout(() => {
            alert(`Sending ${textRef.current}`);
            setText(''); // Clear the input after sending
        }, 3000); // Simulate a 3-second delay for sending the message
    }

  return (
    <div>
        <h2>Challenge 4 of 4: Read the latest state</h2>
        <input 
            type="text" 
            value={text}
            onChange={(e) => {
                setText(e.target.value);
                textRef.current = e.target.value; // Update the ref with the latest input value
            }}
        />
        <button onClick={handleSend}>Send</button>
      
    </div>
  )
}

export default NewChat
