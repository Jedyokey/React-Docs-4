import React, { useRef } from 'react'

const Dashboard = () => {
  return (
    <div>
        <h2>Challenge 3 of 4: Fix debouncing</h2>
        <DebouncedButton onClick={() => alert("Spaceship launched!")}>
            Launch the spaceship
        </DebouncedButton>

        <DebouncedButton onClick={() => alert("Soup boiled!")}>
            Boil the soup
        </DebouncedButton>

        <DebouncedButton onClick={() => alert("Lullaby sung!")}>
            Sing a lullaby
        </DebouncedButton>
      
    </div>
  )
}

export default Dashboard


const DebouncedButton = ({ onClick, children }) => {
    const timeoutID = useRef(null);

    const handleTimeoutClick = () => {
        clearTimeout(timeoutID.current);
        timeoutID.current = setTimeout(() => {
            onClick();
        }, 1000); 
    }
 
    return (
        <div>
            <button onClick={handleTimeoutClick} style={{ marginBottom: "10px" }}>
                {children}
            </button>
        </div>
    )
}