import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import BookingTable from "../../Table/BookingTable";
import LoadingSpinner from "../../shared/Spinner/LoadingSpinner";


const BookingHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["booking-history", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <LoadingSpinner></LoadingSpinner>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">
        Booking History ({bookings.length})
      </h2>

      <BookingTable bookings={bookings} showActions={false} />
    </div>
  );
};

export default BookingHistory;
