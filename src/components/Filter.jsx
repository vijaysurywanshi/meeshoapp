import React from 'react';

const Filter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter">
      <h3>Filters</h3>
      <div className="filter-category">
        <h4>Category</h4>
        <ul>
          <li onClick={() => onCategoryChange('All')}>All</li>
          <li onClick={() => onCategoryChange('Clutches')}>Clutches</li>
          <li onClick={() => onCategoryChange('Cross Body Bags & Sling Bags')}>Cross Body Bags & Sling Bags</li>
          <li onClick={() => onCategoryChange('Handbags')}>Handbags</li>
          <li onClick={() => onCategoryChange('Potlis')}>Potlis</li>
          <li onClick={() => onCategoryChange('Slingbags')}>Slingbags</li>
          <li onClick={() => onCategoryChange('Waist Bags')}>Waist Bags</li>
          <li onClick={() => onCategoryChange('Wallets')}>Wallets</li>
          <li onClick={() => onCategoryChange('Women Backpacks')}>Women Backpacks</li>
        </ul>
      </div>
      <div className="filter-gender">
        <h4>Gender</h4>
        <ul>
          <li>Girls</li>
          <li onClick={() => onCategoryChange('Women Backpacks')}>Women </li>

          <li>Women</li>
        </ul>
      </div>
      <div className="filter-fabric">
        <h4>Fabric</h4>
        <ul>
          <li>Cotton</li>
          <li>Leather</li>
          <li>Polyester</li>
          <li>Others</li>
        </ul>
      </div>
      <div className="filter-color">
        <h4>Color</h4>
        <ul>
          <li>Black</li>
          <li>Blue</li>
          <li>Red</li>
          <li>White</li>
        </ul>
      </div>
      <div className="filter-price">
        <h4>Price</h4>
        <ul>
          <li>Under ₹200</li>
          <li>₹200 - ₹500</li>
          <li>Above ₹500</li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
