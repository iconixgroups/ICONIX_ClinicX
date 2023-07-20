```javascript
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider as UserProfileProvider } from './components/UserProfile/UserProfile';
import { Provider as AppointmentsProvider } from './components/Appointments/Appointments';
import { Provider as OnlineConsultationsProvider } from './components/OnlineConsultations/OnlineConsultations';
import { Provider as PharmacyOrdersProvider } from './components/PharmacyOrders/PharmacyOrders';
import { Provider as HealthRecordsProvider } from './components/HealthRecords/HealthRecords';
import { Provider as NotificationsProvider } from './components/Notifications/Notifications';

const Main = () => {
  return (
    <UserProfileProvider>
      <AppointmentsProvider>
        <OnlineConsultationsProvider>
          <PharmacyOrdersProvider>
            <HealthRecordsProvider>
              <NotificationsProvider>
                <App />
              </NotificationsProvider>
            </HealthRecordsProvider>
          </PharmacyOrdersProvider>
        </OnlineConsultationsProvider>
      </AppointmentsProvider>
    </UserProfileProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
```