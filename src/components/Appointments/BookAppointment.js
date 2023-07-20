```javascript
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { AppointmentSchema } from '../../schemas/AppointmentSchema';

const BookAppointment = () => {
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const bookAppointment = () => {
    const appointment = new AppointmentSchema(doctorName, date, time);
    // API call to book appointment goes here
    // On success, display the 'appointmentBooked' message
  };

  return (
    <View>
      <TextInput
        placeholder="Doctor's Name"
        value={doctorName}
        onChangeText={setDoctorName}
        testID="searchDoctorInput"
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button
        title="Book Appointment"
        onPress={bookAppointment}
        testID="bookAppointmentButton"
      />
    </View>
  );
};

export default BookAppointment;
```