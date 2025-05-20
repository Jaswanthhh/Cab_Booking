
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import CabForm from '../../components/cab-details/CabForm';

// Mock data - in a real app, this would come from API
const mockCab = {
  vehicleType: 'SUV',
  tagLine: 'This is a Tag Line.',
  vehicleNo: 'MH10FJ234',
  driverName: 'John Doe',
  address: 'VIP Road, Nagpur',
  mobile: '9876543210',
  price: '20 Rupees',
  cabFor: ['One Way', 'Rental', 'OutStation'],
};

const EditCabPage = () => {
  const { id } = useParams();
  
  return (
    <Layout title="Edit Cab Details" backLink="/cab-details">
      <CabForm isEdit initialData={mockCab} />
    </Layout>
  );
};

export default EditCabPage;
