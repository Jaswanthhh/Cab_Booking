
import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex justify-end items-center h-16 bg-white shadow-sm px-6 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">👤</span>
          </div>
          <span className="text-gray-700">▼</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
