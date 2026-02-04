import React from "react";

const PatientDetail = ({ booking, onClose }) => {
  return (
    <dialog open className="modal">
      <div className="modal-box w-11/12 max-w-3xl">
        <h3 className="font-bold text-xl mb-4">Booking Details</h3>

        <div className="space-y-2">
          <p><b>Pet Name:</b> {booking.petName}</p>
          <p><b>Pet Type:</b> {booking.petType}</p>
          <p><b>Age:</b> {booking.age}</p>
          <p><b>Symptoms:</b> {booking.symptoms}</p>
          <p><b>Duration:</b> {booking.duration}</p>
          <p><b>Category:</b> {booking.category}</p>
          <p><b>Mode:</b> {booking.mode}</p>
          <p><b>Vet:</b> {booking.vet}</p>
          <p><b>Owner Email:</b> {booking.userEmail}</p>
          <p><b>Consultation Date:</b> {booking.consultationDate}</p>
          <p><b>Consultation Time:</b> {booking.consultationTime}</p>
          <p><b>Fee:</b> ${booking.fee}</p>
          <p><b>Status:</b> {booking.status}</p>
        </div>

        <div className="modal-action mt-4">
          <button onClick={onClose} className="btn btn-sm btn-primary">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PatientDetail;
