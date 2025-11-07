import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } =
    useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Sepetiniz boş!');
      return;
    }
    alert(`Toplam: ${getTotalPrice()} ₺\n\nSiparişiniz alındı! (Bu bir demo uygulamadır)`);
    clearCart();
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button className="cart-toggle" onClick={() => setIsOpen(true)}>
        <span className="cart-icon">🛒</span>
        {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
      </button>
    );
  }

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Sepetim</h2>
          <button className="cart-close" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Sepetiniz boş</p>
              <Link to="/products" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                Alışverişe Başla
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="cart-item">
                    <Link
                      to={`/products/${item.product.id}`}
                      className="cart-item-image"
                      onClick={() => setIsOpen(false)}
                    >
                      <img src={item.product.image} alt={item.product.name} />
                    </Link>
                    <div className="cart-item-info">
                      <Link
                        to={`/products/${item.product.id}`}
                        className="cart-item-name"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.product.name}
                      </Link>
                      <div className="cart-item-price">{item.product.price} ₺</div>
                      <div className="cart-item-quantity">
                        <button
                          className="quantity-btn-small"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="quantity-btn-small"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Toplam:</span>
                  <span className="cart-total-price">{getTotalPrice()} ₺</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Sipariş Ver
                </button>
                <button className="clear-cart-btn" onClick={clearCart}>
                  Sepeti Temizle
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

