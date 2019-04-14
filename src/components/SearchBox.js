import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pb4 searchbox">
      <input
        className="br2 pa3 ba  bg-white ph6"
        type="search"
        placeholder="Digite o elemento"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
