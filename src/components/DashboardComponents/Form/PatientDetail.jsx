import React from "react";
import Button from "../../../pages/shared/Button/Button";

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
          <p><b>Veterinarian:</b> {booking.vetName} ({booking.vetEmail})</p>
          <p><b>Owner Email:</b> {booking.userEmail}</p>
          <p><b>Consultation Date:</b> {booking.consultationDate}</p>
          <p><b>Consultation Time:</b> {booking.consultationTime}</p>
          <p><b>Fee:</b> ${booking.fee}</p>
          <p><b>Status:</b> {booking.status}</p>

          {booking.reportURL && (
            <div className="mt-2">
              <b>Pet Image:</b>
              <div className="mt-1">
                <img
                  src={booking.reportURL}
                  alt="Report"
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
        </div>

        <div className="modal-action mt-4">
          <Button onClick={onClose} className="">
            Close
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default PatientDetail;
