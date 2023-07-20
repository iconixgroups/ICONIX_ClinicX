```javascript
import React, { useState, useEffect } from 'react';
import VideoCall from './VideoCall';

const OnlineConsultations = () => {
  const [onlineConsultations, setOnlineConsultations] = useState([]);

  useEffect(() => {
    fetchOnlineConsultations();
  }, []);

  const fetchOnlineConsultations = async () => {
    const response = await fetch('https://api.clinicx.com/online-consultations');
    const data = await response.json();
    setOnlineConsultations(data);
  };

  return (
    <div>
      {onlineConsultations.map(consultation => (
        <div key={consultation.id}>
          <h2>{consultation.doctorName}</h2>
          <p>{consultation.date}</p>
          <p>{consultation.time}</p>
          <VideoCall consultationId={consultation.id} />
        </div>
      ))}
    </div>
  );
};

export default OnlineConsultations;
```