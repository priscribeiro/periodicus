import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pb4">
      <input
        className="br4 pa3 ba  bg-white ph6"
        type="search"
        placeholder="Insira o elemento..."
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
