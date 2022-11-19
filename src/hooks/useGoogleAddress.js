import axios from 'axios';
import { useEffect, useState } from 'react';

const key = String(process.env.KEY_MAP);

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      if (response.data.results.length) {
        setMap(response.data.results[0].geometry.location);
      }
    }
    if (address) {
      fetchData();
    }
  }, [address]);

  return map;
};

export default useGoogleAddress;
