import React, { useRef, useEffect } from 'react'

const InputChallenge = ({ value, onChange }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input when the component mounts
        inputRef.current.focus();
        console.log("Input focused");
    }, []);

  return (
    <div>
        <input type="text" ref={inputRef} value={value} onChange={onChange} />
    </div>
  )
}

export default InputChallenge
