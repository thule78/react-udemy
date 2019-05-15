import React from 'react'

import itemsData from './ProductsData'
import Item from './Product'

function Mapping(){
  const componentsProduct = itemsData.map(product => <Item key={product.id} item={product} />)

  return (
    <div>
      {componentsProduct}
    </div>
    )
}
export default Mapping
