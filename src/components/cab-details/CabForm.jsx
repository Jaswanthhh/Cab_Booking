
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CabForm = ({ isEdit = false, initialData }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    vehicleType: initialData?.vehicleType || '',
    tagLine: initialData?.tagLine || '',
    vehicleNo: initialData?.vehicleNo || '',
    driverName: initialData?.driverName || '',
    address: initialData?.address || '',
    mobile: initialData?.mobile || '',
    price: initialData?.price || '',
    cabFor: initialData?.cabFor || [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        cabFor: [...formData.cabFor, value],
      });
    } else {
      setFormData({
        ...formData,
        cabFor: formData.cabFor.filter(item => item !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here would be API call to save data
    console.log('Form submitted:', formData);
    
    if (isEdit) {
      toast.success('Cab details updated successfully');
    } else {
      toast.success('Cab details added successfully');
    }
    
    navigate('/cab-details');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
              <select 
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleInputChange}
                className="cab-input"
                required
              >
                <option value="">Select</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Mini">Mini</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tag Line</label>
              <input 
                type="text"
                name="tagLine"
                value={formData.tagLine}
                onChange={handleInputChange}
                className="cab-input"
                placeholder="Enter Tag Line"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle No</label>
              <input 
                type="text"
                name="vehicleNo"
                value={formData.vehicleNo}
                onChange={handleInputChange}
                className="cab-input"
                placeholder="Enter Vehicle Number"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Driver Name</label>
              <input 
                type="text"
                name="driverName"
                value={formData.driverName}
                onChange={handleInputChange}
                className="cab-input"
                placeholder="Enter Driver Name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input 
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="cab-input"
                placeholder="Enter Full Address"
                required
              />
            </div>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex justify-center mb-4">
              <img 
                src="https://placehold.co/200x150/white/cccccc?text=Car+Image" 
                alt="Vehicle" 
                className="rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
              <div className="flex">
                <div className="bg-gray-100 border border-gray-300 rounded-l-md px-3 flex items-center">
                  <span className="text-gray-500">India (+91)</span>
                </div>
                <input 
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="cab-input rounded-l-none flex-1"
                  placeholder="Enter Your Phone Number Here"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input 
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="cab-input"
                placeholder="Enter Price /Km"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Cab for</label>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="oneWay"
                    name="cabFor" 
                    value="One Way" 
                    checked={formData.cabFor.includes('One Way')}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-cab-orange border-gray-300 rounded focus:ring-cab-orange"
                  />
                  <label htmlFor="oneWay" className="ml-2 text-sm text-gray-700">One Way</label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="rental"
                    name="cabFor" 
                    value="Rental" 
                    checked={formData.cabFor.includes('Rental')}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-cab-orange border-gray-300 rounded focus:ring-cab-orange"
                  />
                  <label htmlFor="rental" className="ml-2 text-sm text-gray-700">Rental</label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="outstation"
                    name="cabFor" 
                    value="OutStation" 
                    checked={formData.cabFor.includes('OutStation')}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-cab-orange border-gray-300 rounded focus:ring-cab-orange"
                  />
                  <label htmlFor="outstation" className="ml-2 text-sm text-gray-700">OutStation</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-4 mt-6">
          {isEdit ? (
            <>
              <button 
                type="button" 
                onClick={() => navigate('/cab-details')} 
                className="cab-button-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="cab-button-primary">Save</button>
            </>
          ) : (
            <>
              <button 
                type="button" 
                onClick={() => navigate('/cab-details')} 
                className="cab-button-secondary"
              >
                Delete
              </button>
              <button type="submit" className="cab-button-primary">Add Cab</button>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default CabForm;
