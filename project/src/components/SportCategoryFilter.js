import React, { useState } from 'react';

const SportCategoryFilter = ({ categories, onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex overflow-x-auto py-4 px-6 space-x-3 no-scrollbar">
      <button
        onClick={() => handleCategoryChange('todos')}
        className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === 'todos' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default SportCategoryFilter;