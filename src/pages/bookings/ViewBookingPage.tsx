
import React from 'react';
import Layout from '../../components/layout/Layout';
import BookingForm from '../../components/bookings/BookingForm';

const ViewBookingPage = () => {
  const bookingData = {
    customerName: 'Genny xyz',
    customerContact: '9875648795',
    customerEmail: 'genny@gmail.com',
    driverName: 'John',
    driverContact: '9875648795',
    driverEmail: 'genny@gmail.com',
    pickupLocation: 'xyz colony ngp',
    stoppage: 'xyz colony ngp',
    destination: 'xyz colony ngp',
    cabType: 'Mini cab',
    amount: '250 /-',
    paymentMode: 'Cash',
    bookingStatus: 'Completed',
    paymentStatus: 'Received',
    ratings: '4 Stars',
    complains: 'None'
  };

  return (
    <Layout title="View Booking Details" backLink="/bookings">
      <BookingForm mode="view" initialData={bookingData} isReadOnly={true} />
    </Layout>
  );
};

export default ViewBookingPage;
