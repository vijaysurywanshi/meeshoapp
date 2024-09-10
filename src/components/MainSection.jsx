// src/components/MainSection.js

import React, { useState } from 'react';
import { productsData } from '../productsData';
import Filter from './Filter';
import ProductCard from './Productcard';
const MainSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = productsData.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  return (
    <div className="main-section">
      <div className="left-side">
        <Filter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </div>
      <div className="right-side">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
