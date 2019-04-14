import React from 'react'
import CardList from '../components/CardList'
import { elements } from '../elements'
import SearchBox from '../components/SearchBox'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      elements: elements,
      searchfield: ''
    }
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { elements, searchfield } = this.state

    // Getting the elements from the searchbox
    const filteredElements = elements.filter(element => {
      return element.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f-subheadline lh-solid pa2">
          <span className="white">Periodicus</span>
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList elements={filteredElements} />
      </div>
    )
  }
}

export default App