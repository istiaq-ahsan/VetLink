import React from "react";
import Button from "../shared/Button/Button";

const statusColor = {
  pending: "badge-warning",
  confirmed: "badge-info",
  completed: "badge-success",
  cancelled: "badge-error",
};

const BookingTable = ({ bookings = [], showActions = false }) => {
  return (
    <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Pet</th>
            <th>Vet</th>
            <th>Mode</th>
            <th>Date & Time</th>
            <th>Fee</th>
            <th>Status</th>
            {showActions && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 && (
            <tr>
              <td colSpan={showActions ? 8 : 7} className="text-center py-6 text-gray-500">
                No bookings found.
              </td>
            </tr>
          )}

          {bookings.map((b, index) => (
            <tr key={b._id}>
              <td>{index + 1}</td>

              <td>
                <div className="font-semibold">{b.petName}</div>
                <div className="text-xs text-gray-500">{b.petType}</div>
              </td>

              <td>{b.vetName}</td>

              <td>
                <span className="badge badge-outline">{b.mode}</span>
              </td>

              <td>{new Date(b.consultationDateTime).toLocaleString()}</td>

              <td>৳{b.fee}</td>

              <td>
                <span className={`badge ${statusColor[b.status] || "badge-ghost"}`}>
                  {b.status}
                </span>
              </td>

              {showActions && (
                <td className="space-x-2">
                  {b.status === "pending" && (
                    <button className="btn btn-error btn-sm">Cancel</button>
                  )}
                  {b.status === "confirmed" && (
                    <button className="btn btn-primary btn-sm">Join Call</button>
                  )}
                  <Button className="btn btn-outline btn-sm">Details</Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
