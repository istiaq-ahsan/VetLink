import React from "react";
import { useQuery } from "@tanstack/react-query";
import AllPatientInfo from "../../../components/DashboardComponents/Form/AllPatientInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../shared/Spinner/LoadingSpinner";

const AllPatients = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); // get logged-in user

  const {
    data: bookings = [],
    isLoading,
    error,
    refetch, // <-- destructure refetch here
  } = useQuery({
    queryKey: ["allBookings"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/bookings");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Failed to load bookings</p>;

  // Filter bookings by logged-in user's email (vet view)
  const userBookings = bookings.filter(
    (booking) => booking.vet === user?.email
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Patients</h2>

      {userBookings.length > 0 ? (
        // Pass refetch to AllPatientInfo
        <AllPatientInfo bookings={userBookings} refetch={refetch} />
      ) : (
        <p className="text-center text-gray-500">No patients right now</p>
      )}
    </div>
  );
};

export default AllPatients;
