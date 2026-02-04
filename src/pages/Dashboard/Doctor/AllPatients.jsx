import React from "react";
import { useQuery } from "@tanstack/react-query";
import AllPatientInfo from "../../../components/DashboardComponents/Form/AllPatientInfo";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllPatients = () => {
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [], isLoading, error } = useQuery({
    queryKey: ["allBookings"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/bookings");
      return data;
    },
  });

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Failed to load bookings</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Patient Bookings</h2>
      <AllPatientInfo bookings={bookings} />
    </div>
  );
};

export default AllPatients;
