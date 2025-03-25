import React from 'react';
import Menu from './Menu';

const MenuPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Menümüz</h1>
        <p>Özel kahvelerimiz ve lezzetli tatlılarımız</p>
      </div>
      <Menu />
    </div>
  );
};

export default MenuPage; 