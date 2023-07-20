```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const InsuranceDetails = () => {
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [policyHolderName, setPolicyHolderName] = useState('');

  const handleSave = () => {
    // Save insurance details in userProfile
    // This is a placeholder and should be replaced with actual save logic
    console.log('Insurance details saved');
  };

  return (
    <View>
      <Text>Insurance Details</Text>
      <TextInput
        placeholder="Insurance Provider"
        value={insuranceProvider}
        onChangeText={setInsuranceProvider}
      />
      <TextInput
        placeholder="Policy Number"
        value={policyNumber}
        onChangeText={setPolicyNumber}
      />
      <TextInput
        placeholder="Policy Holder Name"
        value={policyHolderName}
        onChangeText={setPolicyHolderName}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default InsuranceDetails;
```