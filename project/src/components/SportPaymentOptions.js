import React, { useState } from 'react';
import { formatPriceCOP } from '../utils/formatUtils';

const SportPaymentOptions = ({ total, onPaymentSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('tarjeta');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentSubmit(paymentMethod, paymentMethod === 'tarjeta' ? cardDetails : null);
  };

  return (
    <div className="mt-6 pt-4 border-t">
      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Total:</span>
        <span>{formatPriceCOP(total)}</span>
      </div>

      <h4 className="font-medium mb-3">Método de pago:</h4>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="tarjeta"
              checked={paymentMethod === 'tarjeta'}
              onChange={() => setPaymentMethod('tarjeta')}
              className="h-4 w-4 text-black focus:ring-black border-gray-300"
            />
            <span>Tarjeta de crédito/débito</span>
          </label>
          
          {paymentMethod === 'tarjeta' && (
            <div className="ml-6 space-y-3">
              <div>
                <input
                  type="text"
                  name="number"
                  value={cardDetails.number}
                  onChange={handleCardChange}
                  placeholder="Número de tarjeta"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleCardChange}
                  placeholder="Nombre en la tarjeta"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleCardChange}
                  placeholder="MM/AA"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  placeholder="CVV"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
          )}
          
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="transferencia"
              checked={paymentMethod === 'transferencia'}
              onChange={() => setPaymentMethod('transferencia')}
              className="h-4 w-4 text-black focus:ring-black border-gray-300"
            />
            <span>Transferencia bancaria</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value="efectivo"
              checked={paymentMethod === 'efectivo'}
              onChange={() => setPaymentMethod('efectivo')}
              className="h-4 w-4 text-black focus:ring-black border-gray-300"
            />
            <span>Pago en efectivo al recibir</span>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Confirmar Pago
        </button>
      </form>
    </div>
  );
};

export default SportPaymentOptions;