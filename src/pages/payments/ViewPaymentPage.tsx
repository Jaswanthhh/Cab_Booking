
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const ViewPaymentPage = () => {
  const paymentDetails = {
    customerName: 'Genny xyz',
    driverName: 'John',
    pickupLocation: 'xyz colony ngp',
    stoppage: 'xyz colony ngp',
    destination: 'xyz colony ngp',
    modeOfPayment: 'Cash',
    advancePayment: '30 /-',
    laterPayment: '50 /-',
    totalAmount: '80 /-'
  };

  return (
    <Layout title="View Payment" backLink="/payments">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-1">Customer Name</p>
              <div className="bg-gray-100 p-2 rounded">{paymentDetails.customerName}</div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Driver Name</p>
              <div className="bg-gray-100 p-2 rounded">{paymentDetails.driverName}</div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Pickup Location</p>
              <div className="bg-gray-100 p-2 rounded">{paymentDetails.pickupLocation}</div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Stoppage</p>
              <div className="bg-gray-100 p-2 rounded">{paymentDetails.stoppage}</div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Destination</p>
              <div className="bg-gray-100 p-2 rounded">{paymentDetails.destination}</div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-1">Mode of Payments</p>
              <div className="bg-gray-100 p-2 rounded text-green-600">{paymentDetails.modeOfPayment}</div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Advance Payment</p>
              <div className="bg-gray-100 p-2 rounded text-green-600">{paymentDetails.advancePayment}</div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Later Payment</p>
              <div className="bg-gray-100 p-2 rounded text-green-600">{paymentDetails.laterPayment}</div>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Total Amount</p>
              <div className="bg-gray-100 p-2 rounded text-green-600">{paymentDetails.totalAmount}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewPaymentPage;
