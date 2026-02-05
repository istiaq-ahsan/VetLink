import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
      <figure className="h-52 overflow-hidden bg-base-200 flex items-center justify-center">
        <img
          src={doctor.photoURL || "https://via.placeholder.com/300"}
          alt={doctor.displayName}
          className="object-cover w-full h-full"
        />
      </figure>

      <div className="card-body">
        <h3 className="text-xl font-semibold">
          {doctor.displayName}
        </h3>

        <p className="text-sm text-gray-500">
          🏥 {doctor.clinic}
        </p>

        <p className="text-sm">
          📅 Experience: {doctor.experience} years
        </p>

        <button
          className="btn btn-success w-full mt-3"
          onClick={() => navigate("/book", { state: doctor })}
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
