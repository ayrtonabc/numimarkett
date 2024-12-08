import React from 'react';
import { MapPin } from 'lucide-react';

const SubHeader: React.FC = () => {
  return (
    <div 
      className="w-100 py-2 px-3 m-0"  // Eliminamos márgenes
      style={{ backgroundColor: '#810C0D' }}  // Eliminamos borderBottom
    >
      {/* Utilizamos un contenedor con un ancho máximo y centrado */}
      <div className="container-fluid d-flex justify-content-center m-0">
        <div className="container d-flex justify-content-between align-items-center m-0"> {/* Centramos el contenido */}
          
          {/* Columna 1: Ubicación */}
          <div className="d-flex align-items-center text-white" style={{ flex: 1 }}>
            <MapPin size={20} className="me-2" />
            <span className="small">Wysłać do Warszawy, Polska</span>
          </div>
          
          {/* Columna 2: Menú de navegación */}
          <nav className="flex-grow-1">
            <ul className="list-unstyled d-flex justify-content-center m-0 gap-4">
              <li className="nav-item dropdown">
                <a 
                  className="nav-link text-white dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Kategoria
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">Monety</a></li>
                  <li><a href="#" className="dropdown-item">Złote monety</a></li>
                  <li><a href="#" className="dropdown-item">Srebro inwestycyjne</a></li>
                  <li><a href="#" className="dropdown-item">Banknoty</a></li>
                  <li><a href="#" className="dropdown-item">Medale i odznaczenia</a></li>
                  <li><a href="#" className="dropdown-item">Akcesoria</a></li>
                </ul>
              </li>
              <li className="nav-item"><a href="#" className="nav-link text-white">Oferty</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-white">Historia</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-white">Pomoc</a></li>
            </ul>
          </nav>

          {/* Columna 3: Tienda */}
          <div style={{ flex: 1, textAlign: 'right' }}>
            <div className="d-flex align-items-center">
              <div className="dropdown">
                <button className="btn btn-link text-white dropdown-toggle" type="button" id="storesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Tienda
                </button>
                <ul className="dropdown-menu" aria-labelledby="storesDropdown">
                  <li><a href="#" className="dropdown-item">MNL Marek Warakomski</a></li>
                  <li><a href="#" className="dropdown-item">Solidus</a></li>
                  <li><a href="#" className="dropdown-item">NUMIZ-JANA</a></li>
                  <li><a href="#" className="dropdown-item">GGN</a></li>
                  <li><a href="#" className="dropdown-item">KOLEKCJONER GDAŃSK</a></li>
                  <li><a href="#" className="dropdown-item">Antykwariat TERIACA</a></li>
                  <li><a href="#" className="dropdown-item">SzerfSzczecin</a></li>
                  <li><a href="#" className="dropdown-item">Salon FJODA Kraków</a></li>
                  <li><a href="#" className="dropdown-item">Mazowieckie Centrum</a></li>
                  <li><a href="#" className="dropdown-item">DOM MONET</a></li>
                  <li><a href="#" className="dropdown-item">SILVA Kraków</a></li>
                  <li><a href="#" className="dropdown-item">Antykwariat</a></li>
                  <li><a href="#" className="dropdown-item">DUKAT KRAKÓW</a></li>
                  <li><a href="#" className="dropdown-item">Numizmatyczny.Com</a></li>
                  <li><a href="#" className="dropdown-item">Numizmatyczny Schafran</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
