import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS_DATA } from '../data/Product.data';
import { Product } from '../models/product.model';
import '../styles/Products.css';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const navigate = useNavigate();
  const products: Product[] = PRODUCTS_DATA;

  const categories = ['Tümü', ...Array.from(new Set(products.map((product) => product.category)))];

  const filteredProducts =
    selectedCategory === 'Tümü'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section id="products" className="products-section">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Ürünlerimiz</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Özel seçilmiş kahve çekirdekleri ve premium ürünlerimizi keşfedin
        </p>
      </div>

      <div className="products-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {!product.inStock && <div className="out-of-stock-badge">Stokta Yok</div>}
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price} ₺</span>
                <button
                  className="view-details-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/products/${product.id}`);
                  }}
                >
                  Detaylar
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>Bu kategoride ürün bulunmamaktadır.</p>
        </div>
      )}
    </section>
  );
};

export default Products;

