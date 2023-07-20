```javascript
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CreateProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    password: '',
    insuranceDetails: '',
    medicineReminders: '',
    healthTracking: '',
    messaging: ''
  });

  const createProfile = () => {
    // Function to create user profile
    // This function should interact with your backend to create the user profile
    // After successful creation, display the 'profileCreated' message
    console.log('Profile Created');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setUserProfile({ ...userProfile, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUserProfile({ ...userProfile, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setUserProfile({ ...userProfile, password: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Insurance Details"
        onChangeText={(text) => setUserProfile({ ...userProfile, insuranceDetails: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Medicine Reminders"
        onChangeText={(text) => setUserProfile({ ...userProfile, medicineReminders: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Health Tracking"
        onChangeText={(text) => setUserProfile({ ...userProfile, healthTracking: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Messaging"
        onChangeText={(text) => setUserProfile({ ...userProfile, messaging: text })}
      />
      <Button
        title="Create Profile"
        onPress={createProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  }
});

export default CreateProfile;
```