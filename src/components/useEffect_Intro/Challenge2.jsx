import React, { useState } from 'react'
import InputExercise from './InputExercise';

const Challenge2 = () => {
    const [show, setShow] = useState(false);
    const [upper, setUpper] = useState(false);
    const [firstName, setFirstName] = useState("James");
    const [lastName, setLastName] = useState("Bond");

    const name = firstName + " " + lastName;

    const handleClick = () => {
        setShow(!show);
    }

  return (
    <div>
        <h2>Challenge 2 of 4: Focus a field conditionally</h2>
        <button onClick={handleClick}>
            {show ? "Hide" : "Show"} Form
        </button><br />

        {show && (
            <>
                <label>
                    Enter your first name:
                    <InputExercise 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        shouldFocus={true}
                    />
                </label>

                <label>
                    Enter your last name:
                    <InputExercise 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        shouldFocus={false} 
                    />
                </label>

                <p>
                    Hello <b>{upper ? name.toUpperCase() : name}</b>
                </p>
            </>
        )}
      
    </div>
  )
}

export default Challenge2
