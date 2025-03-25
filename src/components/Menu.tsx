import React from 'react';

interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    category: "İçecekler",
    name: "Türk Kahvesi",
    description: "Geleneksel Türk kahvesi",
    price: 45
  },
  {
    id: 2,
    category: "İçecekler",
    name: "Espresso",
    description: "İtalyan usulü espresso",
    price: 35
  },
  {
    id: 3,
    category: "İçecekler",
    name: "Latte",
    description: "Sütlü espresso",
    price: 40
  },
  {
    id: 4,
    category: "Tatlılar",
    name: "Cheesecake",
    description: "Ev yapımı New York cheesecake",
    price: 55
  },
  {
    id: 5,
    category: "Tatlılar",
    name: "Tiramisu",
    description: "İtalyan usulü tiramisu",
    price: 50
  }
];

const Menu: React.FC = () => {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <section id="menu" className="menu-section">
      <h2>Menümüz</h2>
      {categories.map(category => (
        <div key={category} className="menu-category">
          <h3>{category}</h3>
          <div className="menu-items">
            {menuItems
              .filter(item => item.category === category)
              .map(item => (
                <div key={item.id} className="menu-item">
                  <div className="menu-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="menu-item-price">
                    {item.price} ₺
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu; 