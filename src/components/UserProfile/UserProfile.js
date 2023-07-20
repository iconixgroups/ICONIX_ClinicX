```javascript
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CreateProfile from './CreateProfile';
import InsuranceDetails from './InsuranceDetails';
import MedicineReminders from './MedicineReminders';
import HealthTracking from './HealthTracking';
import Messaging from './Messaging';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  const handleProfileCreation = (profile) => {
    setUserProfile(profile);
  };

  return (
    <View>
      <Text>User Profile</Text>
      {userProfile ? (
        <View>
          <Text>Welcome, {userProfile.name}</Text>
          <InsuranceDetails userProfile={userProfile} />
          <MedicineReminders userProfile={userProfile} />
          <HealthTracking userProfile={userProfile} />
          <Messaging userProfile={userProfile} />
        </View>
      ) : (
        <CreateProfile onCreateProfile={handleProfileCreation} />
      )}
    </View>
  );
};

export default UserProfile;
```