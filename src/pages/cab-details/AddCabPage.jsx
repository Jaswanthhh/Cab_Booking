
import React from 'react';
import Layout from '../../components/layout/Layout';
import CabForm from '../../components/cab-details/CabForm';

const AddCabPage = () => {
  return (
    <Layout title="Add Cab Details" backLink="/cab-details">
      <CabForm />
    </Layout>
  );
};

export default AddCabPage;
