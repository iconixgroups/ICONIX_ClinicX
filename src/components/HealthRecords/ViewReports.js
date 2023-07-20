```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { HealthRecordSchema } from '../../shared/HealthRecordSchema';

const ViewReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch('https://clinicx.io/api/reports', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  return (
    <ScrollView>
      {reports.map((report, index) => (
        <View key={index}>
          <Text>{report.title}</Text>
          <Text>{report.date}</Text>
          <Text>{report.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ViewReports;
```