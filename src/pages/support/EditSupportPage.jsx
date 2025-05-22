
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditSupportPage = () => {
  const [contactNumber, setContactNumber] = useState('1800 0000 0000');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update contact number
    console.log("Updating contact number to:", contactNumber);
    // Navigate back to support page
    navigate("/support");
  };

  const handleCancel = () => {
    navigate("/support");
  };

  return (
    <Layout title="Edit Help & Support" backLink="/support">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="contactNumber" className="block text-gray-700 mb-2">Contact Number</label>
              <Input 
                id="contactNumber"
                type="text" 
                value={contactNumber} 
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full bg-gray-50"
              />
            </div>
            
            <div className="flex justify-end gap-4 mt-8">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleCancel}
                className="min-w-[100px]"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-cab-orange hover:bg-orange-600 text-white min-w-[100px]"
              >
                Update
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditSupportPage;
