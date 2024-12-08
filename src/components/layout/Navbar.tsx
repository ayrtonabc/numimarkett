import React from 'react';
import { Search, ShoppingCart, User, Heart, Bell } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#810C0D' }}>
      <div className="container py-2">
        <a className="navbar-brand text-white d-flex align-items-center" href="/">
          <img src="/logo.png" 
               alt="NumiMarket" 
               style={{ height: '50px', marginRight: '10px' }}
          />
          
        </a>
        
        <div className="d-flex flex-grow-1 mx-4">
          <div className="input-group">
            <input 
              type="search" 
              className="form-control"
              placeholder="Szukaj monet, kolekcji i więcej..."
              style={{ borderRadius: '20px 0 0 20px', height: '40px' }}
            />
            <button 
              className="btn"
              style={{ 
                backgroundColor: '#D4AF37', 
                borderRadius: '0 20px 20px 0',
                height: '40px'
              }}
            >
              <Search color="white" size={20} />
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <button 
            className="btn position-relative"
            style={{
              backgroundColor: '#D4AF37',
              color: 'white',
              animation: 'pulse 2s infinite'
            }}
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              Nowe
            </span>
            Aukcje
          </button>
          <a href="#" className="text-white text-decoration-none">
            <Bell size={20} />
          </a>
          <a href="#" className="text-white text-decoration-none">
            <Heart size={20} />
          </a>
          <div className="dropdown">
            <button className="btn text-white dropdown-toggle" data-bs-toggle="dropdown">
              <User size={20} className="me-1" />
              <span className="small">Konto</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Logowanie</a></li>
              <li><a className="dropdown-item" href="#">Rejestracja</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Moje konto</a></li>
            </ul>
          </div>
          <button className="btn text-white position-relative">
            <ShoppingCart size={20} />
            <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
              style={{ backgroundColor: '#D4AF37' }}
            >
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;