import React from 'react'
import Card from './Card'

const CardList = ({ elements }) => {
  const cardComponent = elements.map((el, i) => {
    return (
      <Card
        key={i}
        id={elements[i].id}
        name={elements[i].name}
        symbol={elements[i].symbol}
        weight={elements[i].weight}
        presence={elements[i].presence}
      />
    )
  })

  return <div>{cardComponent}</div>
}

export default CardList
