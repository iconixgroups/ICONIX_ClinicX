```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { notifications } from '../../App';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    setReminders(notifications.reminders);
  }, [notifications]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminders</Text>
      {reminders.map((reminder, index) => (
        <View key={index} style={styles.reminder}>
          <Text style={styles.reminderText}>{reminder}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reminder: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  reminderText: {
    fontSize: 16,
  },
});

export default Reminders;
```