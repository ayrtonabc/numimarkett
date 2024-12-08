import React from 'react';
import { Product } from '../types';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div id="featuredProducts" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {products.slice(0, 3).map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#featuredProducts"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            style={{ backgroundColor: '#D4AF37' }}
          ></button>
        ))}
      </div>
      
      <div className="carousel-inner">
        {products.slice(0, 3).map((product, index) => (
          <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img 
              src={product.image} 
              className="d-block w-100"
              alt={product.title}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="carousel-caption" style={{ backgroundColor: 'rgba(129, 12, 13, 0.7)' }}>
              <h5>{product.title}</h5>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#featuredProducts" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#featuredProducts" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProductCarousel;