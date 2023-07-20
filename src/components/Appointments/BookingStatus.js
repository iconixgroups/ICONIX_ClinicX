```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookingStatus = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data from server or local storage
    // This is a placeholder, replace with actual data fetching logic
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      // Replace with actual API endpoint
      const response = await fetch('https://api.example.com/appointments');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <View style={styles.container}>
      {appointments.map((appointment) => (
        <View key={appointment.id} style={styles.appointment}>
          <Text style={styles.text}>Doctor: {appointment.doctor}</Text>
          <Text style={styles.text}>Date: {appointment.date}</Text>
          <Text style={styles.text}>Time: {appointment.time}</Text>
          <Text style={styles.text}>Status: {appointment.status}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  appointment: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 16,
  },
});

export default BookingStatus;
```