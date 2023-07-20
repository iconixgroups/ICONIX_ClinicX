```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { userProfile } from '../../App';

const HealthTracking = () => {
  const [healthData, setHealthData] = useState(userProfile.healthTracking);

  useEffect(() => {
    setHealthData(userProfile.healthTracking);
  }, [userProfile]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Health Tracking</Text>
      {healthData.map((data, index) => (
        <View key={index} style={styles.dataContainer}>
          <Text style={styles.dataTitle}>{data.title}</Text>
          <Text style={styles.dataValue}>{data.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataContainer: {
    marginBottom: 10,
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataValue: {
    fontSize: 16,
  },
});

export default HealthTracking;
```