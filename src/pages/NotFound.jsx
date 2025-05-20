
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-cab-orange mb-4">404</h1>
          <p className="text-2xl mb-6">Oops! Page not found</p>
          <p className="text-gray-600 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
          <a href="/" className="cab-button-primary">
            Return to Dashboard
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
