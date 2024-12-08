import React, { useState } from 'react';
import { Heart, ShoppingCart, MessageCircle } from 'lucide-react';
import Header from './components/layout/Header';
import MetalPrices from './components/home/MetalPrices';
import FeaturedCarousel from './components/home/FeaturedCarousel';
import QuickActions from './components/home/QuickActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Datos de los productos
const products = [
  { id: 1, description: 'Moneta kolekcjonerska z 1800 roku', price: 100, image: 'https://via.placeholder.com/300' },
  { id: 2, description: 'Moneta z epoki średniowiecza', price: 200, image: 'https://via.placeholder.com/300' },
  { id: 3, description: 'Zabytkowa moneta z XVIII wieku', price: 150, image: 'https://via.placeholder.com/300' },
  { id: 4, description: 'Zabytkowa moneta rzymska', price: 120, image: 'https://via.placeholder.com/300' },
  { id: 5, description: 'Moneta z XIX wieku', price: 180, image: 'https://via.placeholder.com/300' },
  { id: 6, description: 'Starożytna moneta grecka', price: 200, image: 'https://via.placeholder.com/300' },
  { id: 7, description: 'Moneta kolekcjonerska z 1900 roku', price: 250, image: 'https://via.placeholder.com/300' },
  { id: 8, description: 'Zabytkowa moneta z czasów PRL', price: 110, image: 'https://via.placeholder.com/300' },
  { id: 9, description: 'Moneta z XIX wieku', price: 130, image: 'https://via.placeholder.com/300' },
  { id: 10, description: 'Zabytkowa moneta srebrna', price: 220, image: 'https://via.placeholder.com/300' },
  { id: 11, description: 'Starożytna moneta rzymska', price: 240, image: 'https://via.placeholder.com/300' },
  { id: 12, description: 'Moneta kolekcjonerska z XIX wieku', price: 150, image: 'https://via.placeholder.com/300' },
  { id: 13, description: 'Moneta z kolekcji numizmatycznej', price: 170, image: 'https://via.placeholder.com/300' },
  { id: 14, description: 'Zabytkowa moneta z czasów cesarstwa', price: 200, image: 'https://via.placeholder.com/300' },
  { id: 15, description: 'Moneta z okresu renesansu', price: 180, image: 'https://via.placeholder.com/300' },
];

// Component ProductCard para mostrar los productos
const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.description} />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-danger">
            <Heart size={20} />
          </button>
          <span className="fs-2">{product.price} PLN</span>
        </div>
        <p className="card-text my-2">{product.description}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-warning">
            <ShoppingCart size={20} className="me-2" />
            Kup teraz
          </button>
          <button className="btn btn-outline-secondary">
            <MessageCircle size={20} className="me-2" />
            Złóż ofertę
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente principal de la aplicación
function App() {
  // Banners para el carrusel
  const banners = [
    {
      id: 1,
      image: '/1.png', // Asegúrate de que las imágenes estén en la carpeta public/img/
      alt: 'Colección de monedas antiguas',
    },
    {
      id: 2,
      image: '/2.jpeg', // Ruta correcta para el segundo banner
      alt: 'Brújula y monedas',
    },
    {
      id: 3,
      image: '/3.jpeg', // Ruta correcta para el tercer banner
      alt: 'Monedas y relojes antiguos',
    },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <MetalPrices />
      <Header />

      <main>
        <FeaturedCarousel banners={banners} />
        <QuickActions />

        <div className="container py-4">
          {/* Fila 1: 5 productos */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="col">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Fila 2: 5 productos */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-4">
            {products.slice(5, 10).map((product) => (
              <div key={product.id} className="col">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Fila 3: 5 productos */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-4">
            {products.slice(10, 15).map((product) => (
              <div key={product.id} className="col">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
