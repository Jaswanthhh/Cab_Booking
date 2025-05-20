
import React from 'react';
import Layout from '../components/layout/Layout';

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium mb-2">Total Cabs</h3>
          <p className="text-3xl font-semibold">24</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium mb-2">Active Bookings</h3>
          <p className="text-3xl font-semibold">12</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium mb-2">Completed Rides</h3>
          <p className="text-3xl font-semibold">156</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium mb-2">Total Revenue</h3>
          <p className="text-3xl font-semibold">₹45,200</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium mb-4">Recent Bookings</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Customer</th>
                <th className="py-2 px-4 text-left">Time</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Brooklyn Simmons</td>
                <td className="py-2 px-4">10:00 AM</td>
                <td className="py-2 px-4">
                  <span className="status-dropped">Dropped</span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Esther Howard</td>
                <td className="py-2 px-4">2:00 PM</td>
                <td className="py-2 px-4">
                  <span className="status-process">In Process</span>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">Aarti Singh</td>
                <td className="py-2 px-4">4:00 PM</td>
                <td className="py-2 px-4">
                  <span className="status-cancelled">Cancelled</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium mb-4">Popular Cab Types</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>SUV</span>
                <span>68%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-cab-orange h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Sedan</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-cab-orange h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Hatchback</span>
                <span>32%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-cab-orange h-2 rounded-full" style={{ width: '32%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Mini</span>
                <span>18%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-cab-orange h-2 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
