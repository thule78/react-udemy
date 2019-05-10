import React from 'react'

function Item (props) {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <p>${props.item.price}</p>
      <p>{props.item.description}</p>
    </div>
    )
}

export default Item
