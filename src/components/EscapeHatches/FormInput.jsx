import React, { useRef } from 'react'

const FormInput = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <h2>Manipulating the DOM with refs</h2>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick} className='focus-btn'>Focus the input</button>
      
    </div>
  )
}

export default FormInput
