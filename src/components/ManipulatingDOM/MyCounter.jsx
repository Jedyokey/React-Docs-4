import React, { useState, useRef } from 'react'

const MyCounter = () => {
    const [show, setShow] = useState(true);
    const ref = useRef(null);

  return (
    <div>
        <h2>Best practices for DOM manipulation with refs</h2>
        <button onClick={() => {
            setShow(!show);
        }}>
            Toggle with setstate
        </button> <br /><br />

        <button onClick={() => {
            ref.current.remove();
        }}>
            Remove from the DOM
        </button>

        {show && <p ref={ref}>Hello World!</p>}
      
    </div>
  )
}

export default MyCounter
