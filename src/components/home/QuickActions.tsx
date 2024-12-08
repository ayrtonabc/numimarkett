import React from 'react';
import { Coins, Award, Star, History } from 'lucide-react';

const QuickActions: React.FC = () => {
  return (
    <div className="container my-4">
      <div className="row row-cols-2 row-cols-md-4 g-3">
        {[
          { icon: <Coins size={24} />, text: 'Monety Złote', color: '#D4AF37' },
          { icon: <Award size={24} />, text: 'Monety Srebrne', color: '#C0C0C0' },
          { icon: <Star size={24} />, text: 'Nowości', color: '#810C0D' },
          { icon: <History size={24} />, text: 'Aukcje', color: '#333333' }
        ].map((action, index) => (
          <div key={index} className="col">
            <button 
              className="btn w-100 h-100 py-3 d-flex flex-column align-items-center gap-2"
              style={{ 
                backgroundColor: '#F4EDE3',
                border: `1px solid ${action.color}`,
                color: action.color
              }}
            >
              {action.icon}
              <span>{action.text}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;