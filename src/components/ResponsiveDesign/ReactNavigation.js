```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Appointments from '../Appointments/Appointments';
import OnlineConsultations from '../OnlineConsultations/OnlineConsultations';
import PharmacyOrders from '../PharmacyOrders/PharmacyOrders';
import HealthRecords from '../HealthRecords/HealthRecords';
import Notifications from '../Notifications/Notifications';
import UserProfile from '../UserProfile/UserProfile';

const Tab = createBottomTabNavigator();

function ReactNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Online Consultations" component={OnlineConsultations} />
        <Tab.Screen name="Pharmacy Orders" component={PharmacyOrders} />
        <Tab.Screen name="Health Records" component={HealthRecords} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="User Profile" component={UserProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ReactNavigation;
```