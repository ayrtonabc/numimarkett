import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#810C0D' }}>
      <div className="container">
        <a className="navbar-brand text-white" href="/">NumiMarket</a>
        
        <div className="d-flex flex-grow-1 mx-4">
          <div className="input-group">
            <input 
              type="search" 
              className="form-control" 
              placeholder="Buscar productos..."
              style={{ borderRadius: '20px 0 0 20px' }}
            />
            <button 
              className="btn" 
              style={{ backgroundColor: '#D4AF37', borderRadius: '0 20px 20px 0' }}
            >
              <Search color="white" size={20} />
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <button className="btn text-white me-3">
            <User size={24} />
          </button>
          <button className="btn text-white position-relative">
            <ShoppingCart size={24} />
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