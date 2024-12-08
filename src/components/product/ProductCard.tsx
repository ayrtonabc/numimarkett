import React from 'react';
import { Heart, Truck } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card h-100 position-relative" 
         style={{ backgroundColor: '#FFFFFF', border: '1px solid #e0e0e0' }}>
      <button 
        className="btn position-absolute end-0 m-2"
        style={{ zIndex: 1 }}
      >
        <Heart size={20} color="#810C0D" />
      </button>
      
      <img 
        src={product.image} 
        className="card-img-top p-3" 
        alt={product.title}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      
      <div className="card-body d-flex flex-column">
        <div className="mb-2">
          {product.shipping?.free && (
            <span className="badge bg-success me-2">Envío gratis</span>
          )}
          {product.shipping?.express && (
            <span className="badge" style={{ backgroundColor: '#D4AF37' }}>FULL</span>
          )}
        </div>
        
        <h5 className="card-title" style={{ fontSize: '1rem', color: '#333333' }}>
          {product.title}
        </h5>
        
        <div className="mt-2">
          <span className="fs-4 fw-bold" style={{ color: '#810C0D' }}>
            ${product.price.toLocaleString()}
          </span>
          {product.installments && (
            <div className="small text-success">
              {product.installments.months}x ${product.installments.amount.toLocaleString()} sin interés
            </div>
          )}
        </div>

        {product.shipping?.free && (
          <div className="d-flex align-items-center mt-2 text-success small">
            <Truck size={16} className="me-1" />
            <span>Envío gratis</span>
          </div>
        )}
        
        <p className="card-text small text-muted mt-2">{product.description}</p>
        
        <div className="mt-auto">
          <button 
            className="btn w-100"
            style={{ 
              backgroundColor: '#D4AF37',
              color: 'white'
            }}
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;