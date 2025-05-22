
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaymentsPage = () => {
  const [bookingId, setBookingId] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Sample payment data
  const payments = [
    {
      id: "BID12344",
      date: "08/05/2024",
      customerName: "Eleanor Pena",
      driverName: "Suraj Yadav",
      status: "Paid"
    },
    {
      id: "BID12343",
      date: "08/05/2024",
      customerName: "Devon Lane",
      driverName: "Rahul Kadu",
      status: "paid"
    },
    {
      id: "BID12342",
      date: "08/05/2024",
      customerName: "Leslie Alexander",
      driverName: "Aditya Nikam",
      status: "Paid"
    },
    {
      id: "BID12341",
      date: "08/05/2024",
      customerName: "Cody Fisher",
      driverName: "Swati Moudekar",
      status: "paid"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic to handle search
    console.log("Searching with:", { bookingId, fromDate, toDate });
  };

  return (
    <Layout title="Payments List">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6 border border-gray-200 rounded-lg p-4">
          <form onSubmit={handleSearch} className="flex flex-wrap gap-2">
            <div className="flex items-center">
              <Input 
                type="text" 
                placeholder="Booking ID" 
                value={bookingId} 
                onChange={(e) => setBookingId(e.target.value)}
                className="w-[180px]"
              />
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

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-cab-orange text-white">
              <TableRow>
                <TableHead className="text-white">Booking ID</TableHead>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Customer Name</TableHead>
                <TableHead className="text-white">Driver Name</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.customerName}</TableCell>
                  <TableCell>{payment.driverName}</TableCell>
                  <TableCell>{payment.status}</TableCell>
                  <TableCell>
                    <Link to={`/payments/view/${payment.id}`} className="text-cab-orange">
                      <i className="text-lg">👁️</i>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          Showing 1 to 5 of 5 Entries
        </div>

        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  );
};

export default PaymentsPage;
