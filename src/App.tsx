
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CabDetailsPage from "./pages/cab-details/CabDetailsPage";
import AddCabPage from "./pages/cab-details/AddCabPage";
import ViewCabPage from "./pages/cab-details/ViewCabPage";
import EditCabPage from "./pages/cab-details/EditCabPage";
import BookingsPage from "./pages/bookings/BookingsPage";
import AddBookingPage from "./pages/bookings/AddBookingPage";
import ViewBookingPage from "./pages/bookings/ViewBookingPage";
import EditBookingPage from "./pages/bookings/EditBookingPage";
import PaymentsPage from "./pages/payments/PaymentsPage";
import ViewPaymentPage from "./pages/payments/ViewPaymentPage";
import SupportPage from "./pages/support/SupportPage";
import EditSupportPage from "./pages/support/EditSupportPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          {/* Cab Details Routes */}
          <Route path="/cab-details" element={<CabDetailsPage />} />
          <Route path="/cab-details/add" element={<AddCabPage />} />
          <Route path="/cab-details/view/:id" element={<ViewCabPage />} />
          <Route path="/cab-details/edit/:id" element={<EditCabPage />} />
          
          {/* Bookings Routes */}
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookings/add" element={<AddBookingPage />} />
          <Route path="/bookings/view/:id" element={<ViewBookingPage />} />
          <Route path="/bookings/edit/:id" element={<EditBookingPage />} />
          
          {/* Payments Routes */}
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/view/:id" element={<ViewPaymentPage />} />
          
          {/* Support Routes */}
          <Route path="/support" element={<SupportPage />} />
          <Route path="/support/edit" element={<EditSupportPage />} />
          
          {/* Placeholder Routes */}
          <Route path="/user" element={<PlaceholderPage title="User" />} />
          <Route path="/driver" element={<PlaceholderPage title="Driver" />} />
          <Route path="/drivers-wallet" element={<PlaceholderPage title="Drivers Wallet" />} />
          <Route path="/account-deletion" element={<PlaceholderPage title="Account Deletion" />} />
          <Route path="/privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms & Conditions" />} />
          <Route path="/refer-earn" element={<PlaceholderPage title="Refer & Earn" />} />
          <Route path="/offer" element={<PlaceholderPage title="Offer" />} />
          <Route path="/logout" element={<PlaceholderPage title="Logout" />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
