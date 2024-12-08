import React from 'react';

interface FeaturedCarouselProps {
  banners: { id: number; image: string; alt: string }[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ banners }) => {
  // Verificamos que 'banners' no sea undefined o vacío
  if (!banners || banners.length === 0) {
    return null;  // Si no hay banners, no renderizamos nada
  }

  return (
    <div
      id="featuredCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000" // Cambio automático cada 5 segundos
    >
      {/* Indicadores del carrusel */}
      <div className="carousel-indicators" style={{ display: 'none' }}>
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#featuredCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            style={{ backgroundColor: '#D4AF37' }}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={banner.image}
              className="d-block w-100"
              alt={banner.alt}
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* Controles prev y next visibles */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#featuredCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Poprzedni</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#featuredCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Następny</span>
      </button>
    </div>
  );
};

export default FeaturedCarousel;
