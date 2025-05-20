
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import BookingList from '../../components/bookings/BookingList';
import { Button } from '@/components/ui/button';

const BookingsPage = () => {
  return (
    <Layout 
      title="Bookings List" 
      actionButton={
        <Link to="/bookings/add">
          <Button className="bg-cab-orange hover:bg-orange-600 text-white">
            Add Booking
          </Button>
        </Link>
      }
    >
      <BookingList />
    </Layout>
  );
};

export default BookingsPage;
