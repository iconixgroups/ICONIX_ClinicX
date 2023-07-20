```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HealthRecordSchema } from '../../schemas/HealthRecordSchema';

const MedicationHistory = () => {
  const [medicationHistory, setMedicationHistory] = useState([]);

  useEffect(() => {
    // Fetch medication history from healthRecords
    const fetchMedicationHistory = async () => {
      try {
        const response = await HealthRecordSchema.find();
        setMedicationHistory(response);
      } catch (error) {
        console.error('Failed to fetch medication history:', error);
      }
    };

    fetchMedicationHistory();
  }, []);

  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Medication History</Text>
        {medicationHistory.map((record, index) => (
          <View key={index}>
            <Text style={{ fontSize: 18 }}>{record.medicationName}</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>{record.datePrescribed}</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>{record.prescribingDoctor}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MedicationHistory;
```