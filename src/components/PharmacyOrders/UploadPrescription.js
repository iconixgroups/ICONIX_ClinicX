```javascript
import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { PharmacyOrderSchema } from '../../schemas/PharmacyOrderSchema';

const UploadPrescription = () => {
  const [prescription, setPrescription] = useState(null);
  const [message, setMessage] = useState('');

  const uploadPrescription = () => {
    if (prescription) {
      // Here, we would typically send the prescription to the server.
      // For this example, we'll just update the local state.
      PharmacyOrderSchema.validate(prescription)
        .then(() => {
          setMessage('Prescription uploaded successfully');
        })
        .catch((error) => {
          setMessage(`Failed to upload prescription: ${error}`);
        });
    } else {
      setMessage('Please enter a prescription');
    }
  };

  return (
    <View>
      <Text>Upload Prescription</Text>
      <TextInput
        placeholder="Enter your prescription"
        onChangeText={setPrescription}
        value={prescription}
        multiline
        numberOfLines={4}
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button
        title="Upload Prescription"
        onPress={uploadPrescription}
        testID="uploadPrescriptionButton"
      />
      {message && <Text>{message}</Text>}
    </View>
  );
};

export default UploadPrescription;
```