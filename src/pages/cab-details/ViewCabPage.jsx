
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import CabDetails from '../../components/cab-details/CabDetails';

// Mock data - in a real app, this would come from API
const mockCab = {
  id: '1',
  vehicleType: 'SUV',
  tagLine: 'This is a Tag Line.',
  vehicleNo: 'MH10FJ234',
  driverName: 'John Doe',
  address: 'VIP Road, Nagpur',
  mobile: '+919876543210',
  price: '20 Rupees/Km',
  cabFor: ['One Way', 'Rental', 'OutStation'],
};

const ViewCabPage = () => {
  const { id } = useParams();
  
  return (
    <Layout 
      title="View Cab Details" 
      backLink="/cab-details"
      actionButton={
        <Link to={`/cab-details/edit/${id}`} className="cab-button-primary">
          Edit
        </Link>
      }
    >
      <CabDetails cab={mockCab} />
    </Layout>
  );
};

export default ViewCabPage;
