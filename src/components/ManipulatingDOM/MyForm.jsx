import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const MyForm = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <h2>Accessing another component’s DOM nodes</h2>
        <MyInput ref={inputRef} />
        <button onClick={handleClick}>
            Focus the input
        </button>
    </div>
  )
}

export default MyForm


const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        // Only expose focus and nothing else
        focus() {
            realInputRef.current.focus();
        },
    }));

    return (
        <input type="text" ref={realInputRef} />
    )
})
// This component uses forwardRef to allow the parent component to access the input's focus method.
// useImperativeHandle is used to customize the instance value that is exposed to parent components when using ref.