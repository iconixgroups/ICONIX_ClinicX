```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { userProfile } from '../../App';

const Messaging = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch previous messages from user profile
    setMessages(userProfile.messaging);
  }, []);

  const sendMessage = () => {
    // Add new message to user profile
    userProfile.messaging.push(message);
    // Clear input field
    setMessage('');
    // Update messages state
    setMessages([...userProfile.messaging]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messaging</Text>
      {messages.map((msg, index) => (
        <Text key={index} style={styles.message}>{msg}</Text>
      ))}
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={text => setMessage(text)}
        placeholder="Type your message..."
      />
      <Button title="Send" onPress={sendMessage} />
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
  message: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default Messaging;
```