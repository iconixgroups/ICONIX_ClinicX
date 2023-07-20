```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MedicineReminders = ({ userProfile }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    if (userProfile && userProfile.medicineReminders) {
      setReminders(userProfile.medicineReminders);
    }
  }, [userProfile]);

  const renderReminder = ({ item }) => (
    <View style={styles.reminderContainer}>
      <Text style={styles.reminderText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicine Reminders</Text>
      <FlatList
        data={reminders}
        renderItem={renderReminder}
        keyExtractor={(item, index) => index.toString()}
      />
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
  reminderContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  reminderText: {
    fontSize: 16,
  },
});

export default MedicineReminders;
```