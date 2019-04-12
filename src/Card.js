import React from 'react'
import { elements } from './elements'

const Card = props => {
  return (
    <div className="tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        style={{ width: 200, height: 200 }}
        className="br-100 h4 w4 dib b--black-05 pa3"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg"
        alt="hidrogenio"
      />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.symbol}</h3>
        <h3>{props.weight}</h3>
        <p>{props.presence}</p>
      </div>
    </div>
  )
}

export default Card
