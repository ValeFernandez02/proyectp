import React from 'react';
import { formatPriceCOP } from '../utils/formatUtils';

const SportProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900">{formatPriceCOP(product.price)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-black text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-800 transition-colors"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportProductCard;