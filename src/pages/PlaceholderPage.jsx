
import React from 'react';
import Layout from '../components/layout/Layout';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <Layout title={title}>
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-semibold mb-4">{title} Page</h2>
        <p className="text-gray-600">This page is under development.</p>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;
