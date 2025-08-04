import React, { useState } from 'react'
import MyNewCounter from './MyNewCounter';

const Challenge3 = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }
  return (
    <div>
        <h2>Challenge 3 of 4: Fix an interval that fires twice</h2>
        <button onClick={handleClick}>
            {show ? "Hide" : "Show"} Counter
        </button><br />
        <hr />

        {show && <MyNewCounter />}
    </div>
  )
}

export default Challenge3
