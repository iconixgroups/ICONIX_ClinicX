```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InstallationGuide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Installation & Infrastructure Detailed Guide</Text>
      <Text style={styles.text}>1. Install Node.js and npm from https://nodejs.org/</Text>
      <Text style={styles.text}>2. Install React Native CLI globally using npm: npm install -g react-native-cli</Text>
      <Text style={styles.text}>3. Clone the project repository from GitHub.</Text>
      <Text style={styles.text}>4. Navigate to the project directory and run npm install to install project dependencies.</Text>
      <Text style={styles.text}>5. For iOS, navigate to the ios folder and run pod install.</Text>
      <Text style={styles.text}>6. To start the project, run react-native run-android or react-native run-ios in the project directory.</Text>
      <Text style={styles.text}>7. Ensure your development environment meets the requirements for React Native: https://reactnative.dev/docs/environment-setup</Text>
      <Text style={styles.text}>8. Follow best practices for React and React Native development.</Text>
      <Text style={styles.text}>9. Ensure all code follows the project's linting rules and passes all tests.</Text>
      <Text style={styles.text}>10. Regularly pull from the main branch to stay up-to-date with the latest changes.</Text>
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
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default InstallationGuide;
```