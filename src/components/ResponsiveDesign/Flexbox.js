```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Clinic X</Text>
      <Text style={styles.text}>Your health is our priority</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Flexbox;
```