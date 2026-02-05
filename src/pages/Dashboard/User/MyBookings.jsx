import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import BookingCard from "../../shared/Card/BookingCard";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: bookings = [], refetch, isLoading } = useQuery({
    queryKey: ["my-bookings", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      console.log(res);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Only pending bookings
  const pendingBookings = bookings.filter(b => b.status === "pending");

  

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6">
        My Consultations ({pendingBookings.length})
      </h2>

      {pendingBookings.length === 0 && (
        <p className="text-gray-500">
          You haven’t booked any consultation yet.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pendingBookings.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={booking}
            onDeleted={() => refetch()} // refresh after cancel
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
