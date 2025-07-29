import React, { useState, useRef } from 'react'

const NewCounter = () => {
    let ref = useRef(0);
    const handleClick = () => {
        ref.current += 1;
        alert(`You clicked me ${ref.current} times`);
    }

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        // Start counting
        setStartTime(Date.now());
        setNow(Date.now());

        // setInterval(() => {
        //     // Update the current time every 10ms
        //     setNow(Date.now());
        // }, 10);

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    const [count, setCount] = useState(0);

    const numberOfClicks = () => {
        setCount(count + 1);
        // console.log(`You clicked me ${count + 1} times`);
    }


  return (
    <div>
        <button onClick={handleClick}>
            Click me
        </button>

        <h2>Example: building a stopwatch</h2>
        <h3>Time passed: {secondsPassed.toFixed(2)}</h3>
        <button onClick={handleStart} style={{marginRight: "10px"}}>Start</button>
        <button onClick={handleStop}>Stop</button><br /><br />
      
        <button onClick={numberOfClicks}>
            You clicked me {count} times
        </button>
    </div>
  )
}

export default NewCounter
