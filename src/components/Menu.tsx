import React from 'react';
import MENU_ITEMS from '../data/Menu.data';
import { MenuItem } from '../models/menu.model';

const menuItems: MenuItem[] = MENU_ITEMS;

const Menu: React.FC = () => {
  const categories = Array.from(new Set(menuItems.map((item) => item.category)));

  return (
    <section id="menu" className="menu-section">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Menümüz</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Özel kahvelerimiz ve lezzetli tatlılarımız</p>
      </div>{' '}
      {categories.map((category) => (
        <div key={category} className="menu-category">
          <h3>{category}</h3>
          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="menu-item">
                  <div className="menu-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="menu-item-price">{item.price} ₺</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
