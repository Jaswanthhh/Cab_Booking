
import React from 'react';
import Layout from '../../components/layout/Layout';
import BookingForm from '../../components/bookings/BookingForm';

const AddBookingPage = () => {
  const initialData = {
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
    paymentMode: 'Cash'
  };

  return (
    <Layout title="Add Bookings" backLink="/bookings">
      <BookingForm mode="add" initialData={initialData} />
    </Layout>
  );
};

export default AddBookingPage;
