
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Edit, Trash2 } from 'lucide-react';

interface Booking {
  id: string;
  srNo: string;
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  time: string;
  status: 'Dropped' | 'In Process' | 'Cancelled';
}

const mockBookings: Booking[] = [
  {
    id: '1',
    srNo: '01',
    customer: {
      name: 'Brooklyn Simmons',
      phone: '+919876543210',
      email: 'example@gmail.com',
      address: '2715 Ash Dr. San',
    },
    time: '10:00 AM',
    status: 'Dropped',
  },
  {
    id: '2',
    srNo: '02',
    customer: {
      name: 'Esther Howard',
      phone: '+919876543210',
      email: 'example@gmail.com',
      address: '2715 Ash Dr. San',
    },
    time: '2:00 Pm',
    status: 'In Process',
  },
  {
    id: '3',
    srNo: '03',
    customer: {
      name: 'Aarti Singh',
      phone: '+919876543210',
      email: 'example@gmail.com',
      address: '2715 Ash Dr. San',
    },
    time: '4:00 PM',
    status: 'Cancelled',
  },
];

const BookingList = () => {
  const navigate = useNavigate();
  const [bookings] = useState<Booking[]>(mockBookings);
  const [currentPage] = useState(1);
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Dropped':
        return 'status-dropped';
      case 'In Process':
        return 'status-process';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  const handleView = (id: string) => {
    navigate(`/bookings/view/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/bookings/edit/${id}`);
  };

  const handleDelete = (id: string) => {
    // In a real app, this would call an API to delete the booking
    console.log(`Delete booking with ID: ${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <select className="cab-input py-1 px-3">
              <option>Online Booking</option>
              <option>Offline Booking</option>
            </select>
          </div>
          
          <div>
            <select className="cab-input py-1 px-3">
              <option>Booking Status</option>
              <option>Dropped</option>
              <option>In Process</option>
              <option>Cancelled</option>
            </select>
          </div>
          
          <div>
            <input 
              type="date" 
              className="cab-input py-1 px-3" 
              placeholder="From date"
            />
          </div>
          
          <div>
            <input 
              type="date" 
              className="cab-input py-1 px-3" 
              placeholder="To date"
            />
          </div>
          
          <button className="cab-button-primary py-1 px-4">Search</button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-cab-orange text-white">
              <th className="py-3 px-4 text-left">SR. No.</th>
              <th className="py-3 px-4 text-left">Customer Info</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{booking.srNo}</td>
                <td className="py-3 px-4">
                  <div className="font-medium">{booking.customer.name}</div>
                  <div className="text-sm text-gray-600">{booking.customer.phone}</div>
                  <div className="text-sm text-gray-600">{booking.customer.email}</div>
                  <div className="text-sm text-gray-600">{booking.customer.address}</div>
                </td>
                <td className="py-3 px-4">{booking.time}</td>
                <td className="py-3 px-4">
                  <span className={getStatusClass(booking.status)}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleView(booking.id)}
                      className="text-gray-500 hover:text-cab-orange"
                      aria-label="View booking"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      onClick={() => handleEdit(booking.id)}
                      className="text-gray-500 hover:text-cab-orange"
                      aria-label="Edit booking"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(booking.id)}
                      className="text-gray-500 hover:text-red-500"
                      aria-label="Delete booking"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 flex items-center justify-between border-t">
        <div className="text-sm text-gray-600">
          Showing 1 to 5 of 5 Entries
        </div>
        
        <div className="flex space-x-2">
          <button className="cab-button-secondary py-1 px-3">Previous</button>
          <button className="bg-cab-orange text-white px-3 py-1 rounded-md">1</button>
          <button className="cab-button-secondary py-1 px-3">Next</button>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
