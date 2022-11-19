import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import handleSumTotal from '../util/CartUtil';

const clientIdPaypal = String(process.env.CLIENT_ID_PP);

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);  
  const { cart, buyer } = state;  
  const navigate = useNavigate();

  const paypalOptions = {
    clientId:
    clientIdPaypal,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {    
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        {cart.length > 0 ? <h3>Resumen de Pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}

        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>

      </div>
    </div>
  );
};

export default Payment;
