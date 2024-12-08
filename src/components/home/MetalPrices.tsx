import React from 'react';
import { TrendingUp } from 'lucide-react';

const MetalPrices: React.FC = () => {
  return (
    <div className="bg-dark text-white py-1">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <TrendingUp size={16} className="me-2" />
            <span className="small">Notowania:</span>
          </div>
          <div className="d-flex gap-4">
            <span className="small">Złoto: 10.629,20 PLN</span>
            <span className="small">Srebro: 125,11 PLN</span>
            <span className="small">USD: 4,04 PLN</span>
            <span className="small">EUR: 4,27 PLN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalPrices;