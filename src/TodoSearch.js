import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  return (
    <div className="TodoSearch">
      <input type="text" placeholder="Cortar cebolla" />
      <span className="search-icon">
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
}

export { TodoSearch };
