
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BookingForm = ({ isReadOnly = false, initialData, mode }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData || {
    customerName: '',
    customerContact: '',
    customerEmail: '',
    driverName: '',
    driverContact: '',
    driverEmail: '',
    pickupLocation: '',
    stoppage: '',
    destination: '',
    cabType: '',
    amount: '',
    paymentMode: '',
    bookingStatus: '',
    paymentStatus: '',
    ratings: '',
    complains: ''
  });

  const handleChange = (e) => {
    if (isReadOnly) return;
    
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    console.log('Form submitted:', formData);
    navigate('/bookings');
  };

  const handleCancel = () => {
    navigate('/bookings');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Customer Name</label>
          <Input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Customer Contact no.</label>
          <Input
            type="text"
            name="customerContact"
            value={formData.customerContact}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Customer Email Id.</label>
          <Input
            type="email"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Driver Name</label>
          <Input
            type="text"
            name="driverName"
            value={formData.driverName}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Driver Contact no.</label>
          <Input
            type="text"
            name="driverContact"
            value={formData.driverContact}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Driver Email Id.</label>
          <Input
            type="email"
            name="driverEmail"
            value={formData.driverEmail}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pickup Location</label>
          <Input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Stoppage</label>
          <Input
            type="text"
            name="stoppage"
            value={formData.stoppage}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Destination</label>
          <Input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Type of Taxi / Cab</label>
          <Input
            type="text"
            name="cabType"
            value={formData.cabType}
            onChange={handleChange}
            readOnly={isReadOnly}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <Input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            readOnly={isReadOnly}
            className={`w-full ${!isReadOnly && 'text-green-500'}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mode of Payments</label>
          <Input
            type="text"
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            readOnly={isReadOnly}
            className={`w-full ${!isReadOnly && 'text-green-500'}`}
          />
        </div>

        {mode === 'view' && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Booking Status</label>
              <Input
                type="text"
                name="bookingStatus"
                value={formData.bookingStatus}
                readOnly={true}
                className="w-full text-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Payment Status</label>
              <Input
                type="text"
                name="paymentStatus"
                value={formData.paymentStatus}
                readOnly={true}
                className="w-full text-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ratings</label>
              <Input
                type="text"
                name="ratings"
                value={formData.ratings}
                readOnly={true}
                className="w-full text-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Complains</label>
              <Input
                type="text"
                name="complains"
                value={formData.complains}
                readOnly={true}
                className="w-full"
              />
            </div>
          </>
        )}
      </div>

      {mode !== 'view' && (
        <div className="flex justify-end gap-4 mt-8">
          <Button 
            type="submit" 
            className="bg-cab-orange hover:bg-orange-600 text-white px-8"
          >
            Save
          </Button>
          <Button 
            type="button"
            variant="outline"
            className="border-gray-300 text-gray-700"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      )}
    </form>
  );
};

export default BookingForm;
