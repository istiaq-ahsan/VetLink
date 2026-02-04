import React, { useState } from "react";
import PatientDetail from "./PatientDetail";

const AllPatientInfo = ({ bookings }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);

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
              <td>{b.vet}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => setSelectedBooking(b)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
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
