import React from 'react'

function Item (props) {
  return (
    <div>
      <h4>{props.item.name}</h4>
      <strong>${props.item.price}</strong>
      <p>{props.item.description}</p>
    </div>
    )
}

export default Item
