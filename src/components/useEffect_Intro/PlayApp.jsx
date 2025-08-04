import React, { useState, useEffect } from 'react'

const PlayApp = () => {
    const [show, setShow] = useState(false);

  return (
    <div>
        <button onClick={() => setShow(!show)}>
            {show ? "Unmount" : "Mount"} the component
        </button>   
        {show && <hr />}
        {show && <Playground />}
    </div>
  )
}

export default PlayApp


const Playground = () => {
    const [text, setText] = useState("a");

    useEffect(() => {
        const onTimeout = () => {
            console.log('⏰ ' + text);
        }

        console.log('🔵 Schedule "' + text + '" log');
        const timeoutId = setTimeout(onTimeout, 3000);

        return () => {
            console.log('🔴 Clear timeout for "' + text + '" log');
            clearTimeout(timeoutId);
        }
    }, [text]);

  return (
    <div>
        <label htmlFor="">
            What to log: {" "}
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} 
            />
        </label>

        <h1>{text}</h1>
    </div>
  )
}