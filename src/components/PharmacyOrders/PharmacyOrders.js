```javascript
import React, { useState, useEffect } from 'react';
import BrowseMedicines from './BrowseMedicines';
import UploadPrescription from './UploadPrescription';
import OrderStatus from './OrderStatus';

const PharmacyOrders = () => {
  const [pharmacyOrders, setPharmacyOrders] = useState([]);

  useEffect(() => {
    fetchPharmacyOrders();
  }, []);

  const fetchPharmacyOrders = async () => {
    // Fetch pharmacy orders from API
    // This is a placeholder, replace with actual API call
    const response = await fetch('https://api.example.com/pharmacyOrders');
    const data = await response.json();
    setPharmacyOrders(data);
  };

  return (
    <div>
      <BrowseMedicines pharmacyOrders={pharmacyOrders} />
      <UploadPrescription />
      <OrderStatus pharmacyOrders={pharmacyOrders} />
    </div>
  );
};

export default PharmacyOrders;
```