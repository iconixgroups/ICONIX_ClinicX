```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Appointments from './components/Appointments/Appointments';
import OnlineConsultations from './components/OnlineConsultations/OnlineConsultations';
import PharmacyOrders from './components/PharmacyOrders/PharmacyOrders';
import HealthRecords from './components/HealthRecords/HealthRecords';
import Notifications from './components/Notifications/Notifications';
import UserProfile from './components/UserProfile/UserProfile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Appointments">
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Online Consultations" component={OnlineConsultations} />
        <Stack.Screen name="Pharmacy Orders" component={PharmacyOrders} />
        <Stack.Screen name="Health Records" component={HealthRecords} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="User Profile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```