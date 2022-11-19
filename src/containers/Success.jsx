import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';
import Map from './Map';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0]?.address);
  return (
    <div className="Success">
      {buyer.length ? (
        <div className="Success-content">
          <h2>{buyer[0].name}, Gracias por tu compra</h2>
          <span>Tu pedido llegará en 3 días a tu dirección</span>
          <div className="Success-map">
            {Object.entries(location).length && <Map data={location} />}
          </div>
        </div>
      ) : (
        <div>No hay informacion</div>
      )}
    </div>
  );
};

export default Success;
