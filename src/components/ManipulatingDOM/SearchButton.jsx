import React from 'react'

const SearchButton = ({ onClick }) => {
  return (
    <div>
        <button onClick={onClick} style={{margin: "10px 0"}}>
            Search
        </button>
        
    </div>
  )
}

export default SearchButton
