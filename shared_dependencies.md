Shared Dependencies:

**Exported Variables:**
- `userProfile`: Contains user profile data including insurance details, medicine reminders, health tracking, and messaging.
- `appointments`: Contains appointment data including doctor search, booking, and status.
- `onlineConsultations`: Contains online consultation data including video call details.
- `pharmacyOrders`: Contains pharmacy order data including medicine browsing, prescription upload, and order status.
- `healthRecords`: Contains health record data including reports, prescriptions, and medication history.
- `notifications`: Contains notification data including reminders and status updates.

**Data Schemas:**
- `UserSchema`: Defines the structure for user profile data.
- `AppointmentSchema`: Defines the structure for appointment data.
- `ConsultationSchema`: Defines the structure for online consultation data.
- `PharmacyOrderSchema`: Defines the structure for pharmacy order data.
- `HealthRecordSchema`: Defines the structure for health record data.
- `NotificationSchema`: Defines the structure for notification data.

**DOM Element IDs:**
- `searchDoctorInput`: Input field for doctor search in appointments.
- `bookAppointmentButton`: Button for booking appointments.
- `videoCallButton`: Button for starting video call in online consultations.
- `browseMedicinesInput`: Input field for browsing medicines in pharmacy orders.
- `uploadPrescriptionButton`: Button for uploading prescriptions in pharmacy orders.
- `viewReportsButton`: Button for viewing reports in health records.
- `createProfileButton`: Button for creating user profile.

**Message Names:**
- `appointmentBooked`: Message displayed when an appointment is booked.
- `consultationStarted`: Message displayed when a consultation starts.
- `orderPlaced`: Message displayed when a pharmacy order is placed.
- `recordViewed`: Message displayed when a health record is viewed.
- `profileCreated`: Message displayed when a user profile is created.

**Function Names:**
- `searchDoctor()`: Function to search doctors for appointments.
- `bookAppointment()`: Function to book appointments.
- `startVideoCall()`: Function to start video call for online consultations.
- `browseMedicines()`: Function to browse medicines for pharmacy orders.
- `uploadPrescription()`: Function to upload prescriptions for pharmacy orders.
- `viewReports()`: Function to view reports in health records.
- `createProfile()`: Function to create user profile.