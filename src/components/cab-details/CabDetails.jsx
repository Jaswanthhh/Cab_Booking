
import React from 'react';
import { Link } from 'react-router-dom';

const CabDetails = ({ cab }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-1">Image</div>
            <img 
              src="https://placehold.co/200x150/white/cccccc?text=Car+Image" 
              alt="Vehicle" 
              className="rounded-md"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Vehicle Type</div>
              <div>{cab.vehicleType}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Tag Line</div>
              <div>{cab.tagLine}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Vehicle No</div>
              <div>{cab.vehicleNo}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Driver Name</div>
              <div>{cab.driverName}</div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Address</div>
              <div>{cab.address}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Mobile</div>
              <div>{cab.mobile}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Price</div>
              <div>{cab.price}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Selected Cab for</div>
              <div className="flex flex-wrap gap-2 mt-1">
                {cab.cabFor.map((type) => (
                  <div 
                    key={type} 
                    className="inline-flex items-center bg-cab-light-gray px-2 py-1 rounded-md"
                  >
                    <input 
                      type="checkbox" 
                      checked={true} 
                      readOnly 
                      className="h-3 w-3 text-cab-orange border-gray-300 rounded focus:ring-cab-orange"
                    />
                    <span className="ml-1 text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabDetails;
