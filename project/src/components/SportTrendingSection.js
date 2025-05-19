import React from 'react';
import SportProductCard from './SportProductCard';

const SportTrendingSection = ({ products, onAddToCart }) => {
  const trendingProducts = products.filter(product => product.trending);

  return (
    <div className="py-8 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <SportProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportTrendingSection;