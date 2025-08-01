import React, { useRef } from 'react'
import SearchButton from "./SearchButton"
import SearchInput from "./SearchInput"

const Page2 = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

  return (
    <div>
        <nav>
            <SearchButton onClick={handleClick} />
        </nav>
        <SearchInput ref={inputRef} />
    </div>
  )
}

export default Page2
