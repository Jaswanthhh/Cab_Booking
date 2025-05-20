
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SupportPage = () => {
  const [filter, setFilter] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Sample tickets data
  const tickets = [
    {
      id: "ID: 365789418",
      date: "Mon, 25 Nov, 2024 at 09:33 PM",
      issue: "Payment Related Issues",
      user: {
        type: "User",
        name: "John",
        mobile: "0123456789"
      },
      status: "Ongoing"
    },
    {
      id: "ID: 365789418",
      date: "Mon, 25 Nov, 2024 at 09:33 PM",
      issue: "Payment Related Issues",
      user: {
        type: "Driver",
        name: "John",
        mobile: "0123456789"
      },
      status: "Solved"
    },
    {
      id: "ID: 365789418",
      date: "Mon, 25 Nov, 2024 at 09:33 PM",
      issue: "Payment Related Issues",
      user: {
        type: "User",
        name: "John",
        mobile: "0123456789"
      },
      status: "Solved"
    },
    {
      id: "ID: 365789418",
      date: "Mon, 25 Nov, 2024 at 09:33 PM",
      issue: "Payment Related Issues",
      user: {
        type: "Driver",
        name: "John",
        mobile: "0123456789"
      },
      status: "Solved"
    },
    {
      id: "ID: 365789418",
      date: "Mon, 25 Nov, 2024 at 09:33 PM",
      issue: "Payment Related Issues",
      user: {
        type: "User",
        name: "John",
        mobile: "0123456789"
      },
      status: "Solved"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle search
    console.log("Searching with:", { filter, fromDate, toDate });
  };

  return (
    <Layout 
      title="Help & Support" 
      actionButton={
        <Link to="/support/edit">
          <Button className="bg-cab-orange hover:bg-orange-600 text-white">
            Edit
          </Button>
        </Link>
      }
    >
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-gray-700 font-medium mb-2">Contact number: <span className="text-cab-orange">1800 0000 0000</span></h3>
        </div>

        <div className="mb-6">
          <h3 className="text-gray-700 font-medium mb-4">Raised Tickets</h3>
          
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <form onSubmit={handleSearch} className="flex flex-wrap gap-2">
              <div className="flex items-center">
                <Select onValueChange={setFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="solved">Solved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center">
                <Input 
                  type="date" 
                  placeholder="From date" 
                  value={fromDate} 
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-[180px]"
                />
              </div>
              <div className="flex items-center">
                <Input 
                  type="date" 
                  placeholder="To date" 
                  value={toDate} 
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-[180px]"
                />
              </div>
              <Button type="submit" className="bg-cab-orange hover:bg-orange-600 text-white">
                Search
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            {tickets.map((ticket, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-700 font-medium">{ticket.issue}</p>
                    <p className="text-sm text-gray-500">{ticket.id}</p>
                    <p className="text-sm text-gray-500">{ticket.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700">{ticket.user.type} - {ticket.user.name}</p>
                    <p className="text-sm text-gray-500">Mobile No - {ticket.user.mobile}</p>
                  </div>
                  <div className={`px-3 py-1 rounded text-sm ${ticket.status === 'Ongoing' ? 'text-amber-600' : 'text-green-600'}`}>
                    {ticket.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
