import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {
  return (
    <div className="tc bg-white dib br2 pa3 ma2 grow bw2">
      <img
        style={{ width: 150, height: 150 }}
        className="br-100 h3 w3 dib pa3"
        src={props.image}
        alt="elemento"
      />
      <div>
        <h2>{props.name}</h2>
        <hr class="mw3 bb bw1 b--black-10" />
        <h3>{props.symbol}</h3>
        <h4>{props.form}</h4>
        <h3>{props.weight}</h3>
      </div>
    </div>
  )
}

export default Card
