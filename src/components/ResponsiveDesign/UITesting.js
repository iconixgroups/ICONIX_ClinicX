```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Appointments from '../Appointments/Appointments';
import OnlineConsultations from '../OnlineConsultations/OnlineConsultations';
import PharmacyOrders from '../PharmacyOrders/PharmacyOrders';
import HealthRecords from '../HealthRecords/HealthRecords';
import Notifications from '../Notifications/Notifications';
import UserProfile from '../UserProfile/UserProfile';

describe('UI Testing', () => {
  test('Appointments component', () => {
    const { getByTestId } = render(<Appointments />);
    const searchInput = getByTestId('searchDoctorInput');
    const bookButton = getByTestId('bookAppointmentButton');

    fireEvent.changeText(searchInput, 'Dr. Smith');
    fireEvent.press(bookButton);

    expect(searchInput.props.value).toBe('Dr. Smith');
  });

  test('Online Consultations component', () => {
    const { getByTestId } = render(<OnlineConsultations />);
    const videoCallButton = getByTestId('videoCallButton');

    fireEvent.press(videoCallButton);
  });

  test('Pharmacy Orders component', () => {
    const { getByTestId } = render(<PharmacyOrders />);
    const browseInput = getByTestId('browseMedicinesInput');
    const uploadButton = getByTestId('uploadPrescriptionButton');

    fireEvent.changeText(browseInput, 'Aspirin');
    fireEvent.press(uploadButton);

    expect(browseInput.props.value).toBe('Aspirin');
  });

  test('Health Records component', () => {
    const { getByTestId } = render(<HealthRecords />);
    const viewButton = getByTestId('viewReportsButton');

    fireEvent.press(viewButton);
  });

  test('Notifications component', () => {
    const { getByTestId } = render(<Notifications />);
  });

  test('User Profile component', () => {
    const { getByTestId } = render(<UserProfile />);
    const createButton = getByTestId('createProfileButton');

    fireEvent.press(createButton);
  });
});
```