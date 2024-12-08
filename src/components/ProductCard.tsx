import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card h-100" style={{ backgroundColor: '#F4EDE3', border: '1px solid #D4AF37' }}>
      <img 
        src={product.image} 
        className="card-img-top p-3" 
        alt={product.title}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ color: '#333333' }}>{product.title}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fs-4" style={{ color: '#810C0D' }}>${product.price}</span>
          <button 
            className="btn"
            style={{ 
              backgroundColor: '#D4AF37',
              color: 'white'
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;