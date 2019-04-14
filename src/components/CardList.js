import React from 'react'
import Card from './Card'

const CardList = ({ elements }) => {
  return (
    <div>
      {elements.map((el, i) => {
        return (
          <Card
            key={i}
            id={elements[i].id}
            image={elements[i].image}
            name={elements[i].name}
            symbol={elements[i].symbol}
            form={elements[i].form}
            weight={elements[i].weight}
            presence={elements[i].presence}
          />
        )
      })}
    </div>
  )
}

export default CardList
