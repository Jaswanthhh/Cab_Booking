
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type SidebarItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

const SidebarItem = ({ to, icon, label, active }: SidebarItemProps) => {
  return (
    <Link to={to} className={`sidebar-item ${active ? 'active' : ''}`}>
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-white shadow-sm h-screen w-[230px] fixed left-0 top-0 border-r border-gray-100">
      <div className="bg-cab-orange text-white p-4 flex items-center justify-center h-16">
        <h1 className="text-xl font-bold">Company Logo</h1>
      </div>

      <div className="flex flex-col gap-1 p-2 mt-4">
        <SidebarItem 
          to="/" 
          icon={<i className="grid text-lg">◫</i>} 
          label="Dashboard" 
          active={path === '/'} 
        />
        <SidebarItem 
          to="/user" 
          icon={<i>👤</i>} 
          label="User" 
          active={path === '/user'} 
        />
        <SidebarItem 
          to="/driver" 
          icon={<i>🚕</i>} 
          label="Driver" 
          active={path === '/driver'} 
        />
        <SidebarItem 
          to="/drivers-wallet" 
          icon={<i>👝</i>} 
          label="Drivers Wallet" 
          active={path === '/drivers-wallet'} 
        />
        <SidebarItem 
          to="/cab-details" 
          icon={<i>🚗</i>} 
          label="Cab Details" 
          active={path.includes('/cab-details')} 
        />
        <SidebarItem 
          to="/bookings" 
          icon={<i>📅</i>} 
          label="Bookings" 
          active={path.includes('/bookings')} 
        />
        <SidebarItem 
          to="/payments" 
          icon={<i>💰</i>} 
          label="Payments" 
          active={path.includes('/payments')} 
        />
        <SidebarItem 
          to="/support" 
          icon={<i>🔧</i>} 
          label="Help & Support" 
          active={path.includes('/support')} 
        />
        <SidebarItem 
          to="/account-deletion" 
          icon={<i>❌</i>} 
          label="Account Deletion" 
          active={path === '/account-deletion'} 
        />
        <SidebarItem 
          to="/privacy-policy" 
          icon={<i>🔒</i>} 
          label="Privacy Policy" 
          active={path === '/privacy-policy'} 
        />
        <SidebarItem 
          to="/terms" 
          icon={<i>📜</i>} 
          label="Terms & Conditions" 
          active={path === '/terms'} 
        />
        <SidebarItem 
          to="/refer-earn" 
          icon={<i>🔄</i>} 
          label="Refer & Earn" 
          active={path === '/refer-earn'} 
        />
        <SidebarItem 
          to="/offer" 
          icon={<i>🏷️</i>} 
          label="Offer" 
          active={path === '/offer'} 
        />
        <div className="mt-4">
          <SidebarItem 
            to="/logout" 
            icon={<i className="text-red-500">⬅️</i>} 
            label="Logout" 
            active={false} 
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
