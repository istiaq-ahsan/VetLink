import React from "react";
import Swal from "sweetalert2";
import Button from "../Button/Button";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const statusColor = {
  pending: "badge-warning",
  confirmed: "badge-info",
  completed: "badge-success",
  cancelled: "badge-error",
};

const BookingCard = ({ booking, onDeleted }) => {
  const axiosSecure = useAxiosSecure();

  const handleCancel = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this consultation?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/bookings/${booking._id}`);
        Swal.fire({
          icon: "success",
          title: "Cancelled!",
          text: "Your consultation has been cancelled.",
          timer: 2000,
          showConfirmButton: false,
        });

        // Callback to parent to refresh data
        if (onDeleted) onDeleted(booking._id);
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to cancel consultation. Please try again.",
        });
      }
    }
  };

  return (
    <div className="card border border-green-200 bg-base-100 shadow-xl">
      <div className="card-body space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            🐾 {booking.petName} ({booking.petType})
          </h3>
          <span className={`badge ${statusColor[booking.status] || "badge-ghost"}`}>
            {booking.status}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          👨‍⚕️ {booking.vet} • {booking.mode}
        </p>
        <p>📅 {new Date(booking.consultationDateTime).toLocaleString()}</p>
        <p className="text-sm">🩺 {booking.symptoms} ({booking.duration})</p>
        <p className="text-sm">📂 {booking.category}</p>
        <p className="font-semibold text-lg">💵 ৳{booking.fee}</p>

        <div className="card-actions justify-end pt-2">
          {booking.status === "pending" && (
            <Button variant="error" size="sm" onClick={handleCancel}>
              Cancel
            </Button>
          )}

          {booking.status === "confirmed" && (
            <Button size="sm">Join Call</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
