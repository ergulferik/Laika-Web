import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PRODUCTS_DATA } from '../data/Product.data';
import { Product } from '../models/product.model';
import { useCart } from '../contexts/CartContext';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const foundProduct = PRODUCTS_DATA.find((p) => p.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
        }
      } catch (error) {
        console.error('Ürün detayları yüklenirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product && product.inStock) {
      addToCart(product, quantity);
      alert(`${product.name} sepete eklendi!`);
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">Yükleniyor...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page-container">
        <div className="error">Ürün bulunamadı</div>
        <button className="btn btn-primary" onClick={() => navigate('/products')}>
          Ürünlere Dön
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => navigate('/products')}>
        ← Ürünlere Dön
      </button>

      <div className="product-detail-header">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
          {!product.inStock && <div className="out-of-stock-overlay">Stokta Yok</div>}
        </div>
        <div className="product-detail-info">
          <span className="product-detail-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-price">{product.price} ₺</div>

          {product.details && (
            <div className="product-details">
              {product.details.origin && (
                <div className="detail-item">
                  <strong>Menşei:</strong> {product.details.origin}
                </div>
              )}
              {product.details.roast && (
                <div className="detail-item">
                  <strong>Kavurma:</strong> {product.details.roast}
                </div>
              )}
              {product.details.weight && (
                <div className="detail-item">
                  <strong>Ağırlık:</strong> {product.details.weight}
                </div>
              )}
              {product.details.flavor && product.details.flavor.length > 0 && (
                <div className="detail-item">
                  <strong>Lezzet Notaları:</strong>
                  <div className="flavor-tags">
                    {product.details.flavor.map((flavor, index) => (
                      <span key={index} className="flavor-tag">
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {product.inStock ? (
            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="quantity-value">{quantity}</span>
                <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>
                  +
                </button>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Sepete Ekle
              </button>
            </div>
          ) : (
            <div className="out-of-stock-message">
              <p>Bu ürün şu anda stokta bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

