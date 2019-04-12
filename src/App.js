import React from 'react'
import CardList from './CardList'
import { elements } from './elements'
import SearchBox from './SearchBox'

const App = () => {
  return (
    <div className="tc">
      <h1>Periodicus</h1>
      <SearchBox />
      <CardList elements={elements} />
    </div>
  )
}

export default App
