import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PendingDoctorsTable from "./Table/PendingDoctorsTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PendingDoctors = () => {
  //const axios = useAxios();
  const axiosSecure = useAxiosSecure();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const {
    data: pendingDoctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pendingDoctors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-doctor");
      return res.data.filter((doc) => doc.status === "pending");
    },
  });

  if (isLoading)
    return <p className="text-center">Loading pending doctors...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Pending Veterinarians</h2>

      <PendingDoctorsTable
        doctors={pendingDoctors}
        refetch={refetch}
        onView={(doctor) => setSelectedDoctor(doctor)} // ✅ added
      />

      {/* ✅ Same modal as AllDoctors */}
      {selectedDoctor && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-lg">
            <h3 className="text-xl font-bold mb-2">
              {selectedDoctor.fullName}
            </h3>

            <img
              src={selectedDoctor.degreeURL}
              alt="Degree"
              className="rounded mb-3"
            />

            <div className="space-y-1">
              <p>
                <b>Email:</b> {selectedDoctor.email}
              </p>
              <p>
                <b>Clinic:</b> {selectedDoctor.clinic}
              </p>
              <p>
                <b>License:</b> {selectedDoctor.license}
              </p>
              <p>
                <b>Experience:</b> {selectedDoctor.experience} years
              </p>
              <p>
                <b>Status:</b>
                <span className="badge badge-warning ml-2">
                  {selectedDoctor.status}
                </span>
              </p>
              <p>
                <b>Applied:</b>{" "}
                {new Date(selectedDoctor.applied_at).toLocaleString()}
              </p>
            </div>

            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedDoctor(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default PendingDoctors;
