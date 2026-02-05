import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PendingDoctorsTable = ({ doctors, onView, refetch }) => {
  //const axios = useAxios();
  const axiosSecure = useAxiosSecure();

  const handleStatusChange = async (doctor, status) => {
    try {
      // 1️⃣ Update doctor status
      await axiosSecure.patch(`/doctor/status/${doctor.email}`, { status });

      // 2️⃣ Update user role based on status
      const role = status === "approved" ? "doctor" : "user";
      await axiosSecure.patch(`/user/role/${doctor.email}`, { role });

      refetch(); // refresh table

      console.log(`Doctor ${status} successfully, role updated to ${role}`);
    } catch (err) {
      console.error("Failed to update doctor:", err);
    }
  };

  return (
    <div className="overflow-x-auto bg-base-100 rounded shadow">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Clinic</th>
            <th>Experience</th>
            <th>details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.length > 0 ? (
            doctors.map((doc, i) => (
              <tr key={doc._id}>
                <td>{i + 1}</td>
                <td>{doc.fullName}</td>
                <td>{doc.clinic}</td>
                <td>{doc.experience} yrs</td>
                <td>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => onView(doc)}
                >
                  Details
                </button>
              </td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleStatusChange(doc, "approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleStatusChange(doc, "rejected")}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">
                No pending applications 🎉
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PendingDoctorsTable;
