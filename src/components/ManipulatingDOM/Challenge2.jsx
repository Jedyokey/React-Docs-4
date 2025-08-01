import React, { useRef } from 'react'

const Page = () => {
    const inputRef = useRef(null);

    const handleSearch = () => {
        inputRef.current.focus();
        alert("Search initiated!");
    }

  return (
    <div>
        <nav>
            <button onClick={handleSearch}>Search</button>
        </nav><br />

        <input 
            type="text"
            placeholder="Looking for something?"
            ref={inputRef}
        />
        
    </div>
  )
}

export default Page
