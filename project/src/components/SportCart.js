import React, { useState } from 'react';
import { formatPriceCOP } from '../utils/formatUtils';
import SportPaymentOptions from './SportPaymentOptions';

const SportCart = ({ cart, onCheckout, onRemoveItem }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePaymentSubmit = (paymentMethod, details) => {
    onCheckout(cart, total, paymentMethod);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">
        {isCheckingOut ? 'Finalizar Compra' : 'Tu Carrito'}
      </h3>
      
      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.productId} className="flex justify-between items-center border-b pb-3">
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    {formatPriceCOP(item.price)} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">
                    {formatPriceCOP(item.price * item.quantity)}
                  </span>
                  {!isCheckingOut && (
                    <button 
                      onClick={() => onRemoveItem(item.productId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {isCheckingOut ? (
            <SportPaymentOptions 
              total={total} 
              onPaymentSubmit={handlePaymentSubmit} 
            />
          ) : (
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>{formatPriceCOP(total)}</span>
              </div>
              
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Proceder al Pago
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SportCart;

// DONE