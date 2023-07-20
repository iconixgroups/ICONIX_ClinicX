```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import ViewReports from './ViewReports';
import MedicationHistory from './MedicationHistory';

const HealthRecords = () => {
  const [healthRecords, setHealthRecords] = useState([]);

  useEffect(() => {
    fetchHealthRecords();
  }, []);

  const fetchHealthRecords = async () => {
    // Fetch health records from the server
    // This is a placeholder, replace with actual fetch request
    const response = await fetch('https://api.example.com/healthRecords', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userProfile.token,
      },
    });

    const data = await response.json();
    setHealthRecords(data);
  };

  return (
    <View>
      <Text>Health Records</Text>
      <Button title="View Reports" onPress={() => <ViewReports />} />
      <Button title="Medication History" onPress={() => <MedicationHistory />} />
      <FlatList
        data={healthRecords}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HealthRecords;
```