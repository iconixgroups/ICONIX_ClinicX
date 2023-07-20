```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NotificationSchema } from '../../schemas/NotificationSchema';
import { notifications } from '../../sharedDependencies';

const Notifications = () => {
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await notifications.find();
      setNotificationList(response);
    } catch (error) {
      console.error(error);
    }
  };

  const renderNotification = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.message}</Text>
    </View>
  );

  return (
    <View>
      <Text>Notifications</Text>
      <FlatList
        data={notificationList}
        renderItem={renderNotification}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default Notifications;
```