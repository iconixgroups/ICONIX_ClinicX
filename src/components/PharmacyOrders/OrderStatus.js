```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PharmacyOrderSchema } from '../../schemas/PharmacyOrderSchema';

const OrderStatus = () => {
  const [orderStatus, setOrderStatus] = useState('');

  useEffect(() => {
    // Fetch order status from the server or local storage
    // This is a placeholder, replace with actual data fetching code
    const fetchOrderStatus = async () => {
      const status = await PharmacyOrderSchema.findOne({ id: 'order1' });
      setOrderStatus(status);
    };

    fetchOrderStatus();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Status</Text>
      <Text style={styles.status}>{orderStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  status: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default OrderStatus;
```