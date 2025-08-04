import React, { useState } from 'react'
import InputChallenge from './InputChallenge'

const Challenge1 = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("James");
    const [upper, setUpper] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

  return (
    <div>
        <h2>Challenge 1 of 4: Focus a field on mount </h2>
        <button onClick={handleClick}>
            {show ? "Hide" : "Show"} Form
        </button><br />
        <hr />

        {show && (
            <>
                <label>
                    Enter your name: {" "}
                    <InputChallenge 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label><br />

                <label>
                    <input 
                        type="checkbox" 
                        checked={upper}
                        onChange={(e) => setUpper(e.target.checked)}
                    />
                    Make it uppercase
                </label>

                <p>
                    Hello, <b>{upper ? name.toUpperCase() : name}</b>
                </p>
            </>
        )}
      
    </div>
  )
}

export default Challenge1
