import React, { useState, useEffect } from 'react'

const MyNewCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const onTick = () => {
            setCount(c => c + 1);
        }

        const intervalId = setInterval(onTick, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default MyNewCounter
