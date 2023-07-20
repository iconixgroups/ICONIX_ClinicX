```javascript
import React, { useState, useEffect } from 'react';
import SearchDoctor from './SearchDoctor';
import BookAppointment from './BookAppointment';
import BookingStatus from './BookingStatus';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const response = await fetch('/api/appointments');
    const data = await response.json();
    setAppointments(data);
  };

  return (
    <div>
      <SearchDoctor appointments={appointments} setAppointments={setAppointments} />
      <BookAppointment appointments={appointments} setAppointments={setAppointments} />
      <BookingStatus appointments={appointments} />
    </div>
  );
};

export default Appointments;
```