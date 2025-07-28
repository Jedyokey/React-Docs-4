import React, { useRef } from 'react'

const Counter = () => {
    let ref = useRef(0);

    const handleClick = () => {
        ref.current = ref.current + 1;
        alert("You clicked " + ref.current + " times!");
    }
  return (
    <div>
        <h2>Counter Component (Referencing values with refs)</h2>
        <p>This is a simple counter component.</p>
        <button onClick={handleClick}>Click Me!</button>
        
    </div>
  )
}

export default Counter
