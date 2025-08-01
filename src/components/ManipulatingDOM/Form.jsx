import React, { useRef } from 'react'

const Form = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }

  return (
    <div>
        <h2>Example: Focusing a text input</h2>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus} style={{ marginLeft: "10px" }}>
            Focus the input
        </button>
      
    </div>
  )
}

export default Form
