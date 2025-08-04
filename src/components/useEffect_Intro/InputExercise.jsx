import React, { useEffect, useRef } from 'react'

const InputExercise = ({ shouldFocus, value, onChange }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input conditionally based on shouldFocus prop
        if (shouldFocus) {
            inputRef.current.focus();
            console.log("Input focused again");
        }
    }, [shouldFocus]);

  return (
    <div>
        <input 
            type="text"
            ref={inputRef} 
            value={value}
            onChange={onChange}
            style={{ width: "200px", padding: "6px", fontSize: "16px" }}
        />
      
    </div>
  )
}

export default InputExercise
