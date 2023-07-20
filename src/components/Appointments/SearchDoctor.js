```javascript
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchDoctor = () => {
    // Logic to search for doctors based on searchTerm
    // This would typically involve making a request to the backend API
    // and updating the `appointments` variable with the results
  };

  return (
    <View>
      <TextInput
        id="searchDoctorInput"
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search for a doctor"
      />
      <Button id="searchDoctorButton" title="Search" onPress={searchDoctor} />
    </View>
  );
};

export default SearchDoctor;
```