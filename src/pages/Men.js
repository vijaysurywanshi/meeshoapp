import React from 'react'
import Filter from '../components/Filter'
import { productsData } from '../productsData'
import ProductCard from '../components/Productcard'

function Men() {
  return (
    <div className="main-section">
      <Filter />
      <div className="products-grid">
        {productsData.filter(product => product.category === 'Men').map(product => (
          <ProductCard key={product.id} product={product} />
        ))
        }
      </div>
      
    </div>
  )
}

export default Men
