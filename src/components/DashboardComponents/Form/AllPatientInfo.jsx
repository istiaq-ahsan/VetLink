import React, { useState, useEffect } from "react";
import PatientDetail from "./PatientDetail";
import Button from "../../../pages/shared/Button/Button";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllPatientInfo = ({ bookings: initialBookings, refetch }) => {
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const axiosSecure = useAxiosSecure();

  // Update local state if initialBookings changes
  useEffect(() => {
    setBookings(initialBookings);
  }, [initialBookings]);

  const handleConfirm = async (bookingId) => {
    try {
      const res = await axiosSecure.patch(`/bookings/${bookingId}`, {
        status: "confirmed",
      });

      if (res.data.modifiedCount > 0 || res.data.success) {
        // Update local state immediately
        setBookings((prev) =>
          prev.map((b) =>
            b._id === bookingId ? { ...b, status: "confirmed" } : b
          )
        );

        Swal.fire({
          icon: "success",
          title: "Booking Confirmed!",
          text: "The booking status has been updated.",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });

        // Optional: refetch to sync with backend
        refetch?.();
      }
    } catch (error) {
      console.error("Failed to confirm booking:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to confirm booking. Please try again.",
      });
    }
  };

  return (
    <>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Owner Email</th>
            <th>Vet</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id}>
              <td>{b.petName}</td>
              <td>{b.petType}</td>
              <td>{b.userEmail}</td>
              <td>{b.vetName || b.vet}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>
                <span
                  className={`badge ${
                    b.status === "pending" ? "badge-warning" : "badge-success"
                  }`}
                >
                  {b.status}
                </span>
              </td>
              <td className="flex flex-col sm:flex-row sm:gap-2 gap-1">
                {b.status === "pending" ? (
                  <Button
                    className="btn-sm btn-outline w-full sm:w-auto"
                    onClick={() => handleConfirm(b._id)}
                  >
                    Confirm
                  </Button>
                ) : (
                  <button
                    className="btn-sm btn-success w-full sm:w-auto cursor-default"
                    disabled
                  >
                    Confirmed
                  </button>
                )}
                <Button
                  className="btn-sm btn-outline w-full sm:w-auto"
                  onClick={() => setSelectedBooking(b)}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBooking && (
        <PatientDetail
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </>
  );
};

export default AllPatientInfo;
