
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import BookingList from '../../components/bookings/BookingList';

const BookingsPage = () => {
  return (
    <Layout 
      title="Bookings List" 
      actionButton={
        <Link to="/bookings/add" className="cab-button-primary">
          Add Booking
        </Link>
      }
    >
      <BookingList />
    </Layout>
  );
};

export default BookingsPage;
