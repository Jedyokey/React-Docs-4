import React, { useState } from 'react'

const ToggleChallenge = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(prev => !prev);
    }

  return (
    <div>
        <h2>Challenge 2 of 4: Fix a component failing to re-render</h2>

        <button onClick={toggle} style={{marginBottom: "10px"}} >
            {isOn ? "Challenge is ON" : "Challenge is OFF"}
        </button>
      
    </div>
  )
}

export default ToggleChallenge
