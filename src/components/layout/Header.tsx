import React from 'react';
import Navbar from './Navbar';
import SubHeader from './SubHeader';

const Header: React.FC = () => {
  return (
    <header>
      <Navbar />
      <SubHeader />
    </header>
  );
};

export default Header;