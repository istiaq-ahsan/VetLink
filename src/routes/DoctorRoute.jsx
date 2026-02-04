import { useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useDoctor from "../hooks/useDoctor";

const DoctorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isDoctor, isDoctorLoading] = useDoctor();
  const location = useLocation();

  // Show loading spinner while checking user role
  if (loading || isDoctorLoading) {
    return <LoadingSpinner />;
  }

  // If user is logged in and a doctor, allow access
  if (user && isDoctor) {
    return children;
  }

  // Otherwise, redirect to home page
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default DoctorRoute;