import React from 'react';
import { FilterState } from '../../types';
import { Truck, Star } from 'lucide-react';

interface SidebarProps {
  categories: string[];
  onFiltersChange: (filters: Partial<FilterState>) => void;
  filters: FilterState;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, onFiltersChange, filters }) => {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="mb-4" style={{ color: '#810C0D' }}>Filtros</h5>
        
        <div className="mb-4">
          <h6 style={{ color: '#333333' }}>Categorías</h6>
          <div className="list-group list-group-flush">
            {categories.map((category) => (
              <button
                key={category}
                className={`list-group-item list-group-item-action border-0 ${
                  filters.category === category ? 'active' : ''
                }`}
                onClick={() => onFiltersChange({ category })}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h6 style={{ color: '#333333' }}>Precio</h6>
          <div className="d-flex gap-2">
            <input
              type="number"
              className="form-control"
              placeholder="Mín."
              onChange={(e) => 
                onFiltersChange({ 
                  priceRange: { 
                    ...filters.priceRange,
                    min: Number(e.target.value)
                  }
                })
              }
            />
            <input
              type="number"
              className="form-control"
              placeholder="Máx."
              onChange={(e) => 
                onFiltersChange({ 
                  priceRange: { 
                    ...filters.priceRange,
                    max: Number(e.target.value)
                  }
                })
              }
            />
          </div>
        </div>

        <div className="mb-4">
          <h6 style={{ color: '#333333' }}>Condición</h6>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="condition"
              id="new"
              checked={filters.condition === 'new'}
              onChange={() => onFiltersChange({ condition: 'new' })}
            />
            <label className="form-check-label" htmlFor="new">
              Nuevo
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="condition"
              id="used"
              checked={filters.condition === 'used'}
              onChange={() => onFiltersChange({ condition: 'used' })}
            />
            <label className="form-check-label" htmlFor="used">
              Usado
            </label>
          </div>
        </div>

        <div className="mb-4">
          <h6 style={{ color: '#333333' }}>Envío</h6>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox"
              id="freeShipping"
              checked={filters.shipping?.freeOnly}
              onChange={(e) => 
                onFiltersChange({ 
                  shipping: { 
                    ...filters.shipping,
                    freeOnly: e.target.checked
                  }
                })
              }
            />
            <label className="form-check-label d-flex align-items-center" htmlFor="freeShipping">
              <Truck size={16} className="me-2" />
              Envío gratis
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox"
              id="fullShipping"
              checked={filters.shipping?.expressOnly}
              onChange={(e) => 
                onFiltersChange({ 
                  shipping: { 
                    ...filters.shipping,
                    expressOnly: e.target.checked
                  }
                })
              }
            />
            <label className="form-check-label d-flex align-items-center" htmlFor="fullShipping">
              <Star size={16} className="me-2" />
              FULL
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;