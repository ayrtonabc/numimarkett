import React from 'react';

interface SidebarProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
  onPriceRangeChange: (min: number, max: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, onCategorySelect, onPriceRangeChange }) => {
  return (
    <div className="card" style={{ backgroundColor: '#F4EDE3' }}>
      <div className="card-body">
        <h5 className="card-title mb-4" style={{ color: '#810C0D' }}>Filtros</h5>
        
        <div className="mb-4">
          <h6 style={{ color: '#333333' }}>Categorías</h6>
          <div className="list-group">
            {categories.map((category) => (
              <button
                key={category}
                className="list-group-item list-group-item-action"
                onClick={() => onCategorySelect(category)}
                style={{ backgroundColor: '#F4EDE3' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h6 style={{ color: '#333333' }}>Rango de Precio</h6>
          <div className="d-flex gap-2">
            <input
              type="number"
              className="form-control"
              placeholder="Min"
              onChange={(e) => onPriceRangeChange(Number(e.target.value), 0)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Max"
              onChange={(e) => onPriceRangeChange(0, Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;