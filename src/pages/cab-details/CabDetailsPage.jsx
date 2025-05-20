
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

interface Cab {
  id: string;
  vehicleType: string;
  tagLine: string;
  vehicleNo: string;
  driverName: string;
  price: string;
}

const mockCabs: Cab[] = [
  {
    id: '1',
    vehicleType: 'SUV',
    tagLine: 'Comfortable family car',
    vehicleNo: 'MH10FJ234',
    driverName: 'John Doe',
    price: '20 Rupees/Km',
  },
  {
    id: '2',
    vehicleType: 'Sedan',
    tagLine: 'Luxury business travel',
    vehicleNo: 'DL05AB123',
    driverName: 'Mike Smith',
    price: '18 Rupees/Km',
  },
  {
    id: '3',
    vehicleType: 'Hatchback',
    tagLine: 'Economic city travel',
    vehicleNo: 'TN02CD456',
    driverName: 'Raj Kumar',
    price: '15 Rupees/Km',
  },
];

const CabDetailsPage = () => {
  const [cabs] = useState<Cab[]>(mockCabs);
  
  return (
    <Layout 
      title="Cab Details" 
      actionButton={
        <Link to="/cab-details/add" className="cab-button-primary">
          Add Cab
        </Link>
      }
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-cab-orange text-white">
                <th className="py-3 px-4 text-left">Vehicle Type</th>
                <th className="py-3 px-4 text-left">Tag Line</th>
                <th className="py-3 px-4 text-left">Vehicle No</th>
                <th className="py-3 px-4 text-left">Driver Name</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cabs.map((cab) => (
                <tr key={cab.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{cab.vehicleType}</td>
                  <td className="py-3 px-4">{cab.tagLine}</td>
                  <td className="py-3 px-4">{cab.vehicleNo}</td>
                  <td className="py-3 px-4">{cab.driverName}</td>
                  <td className="py-3 px-4">{cab.price}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Link 
                        to={`/cab-details/view/${cab.id}`} 
                        className="text-gray-500 hover:text-cab-orange"
                      >
                        👁️
                      </Link>
                      <Link 
                        to={`/cab-details/edit/${cab.id}`} 
                        className="text-gray-500 hover:text-cab-orange"
                      >
                        ✏️
                      </Link>
                      <button className="text-gray-500 hover:text-red-500">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default CabDetailsPage;
