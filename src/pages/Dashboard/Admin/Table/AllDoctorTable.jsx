import React from "react";

const AllDoctorTable = ({ doctors, onView }) => {
  return (
    <div className="overflow-x-auto bg-base-100 rounded shadow">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Clinic</th>
            <th>Experience</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doc, index) => (
            <tr key={doc._id}>
              <td>{index + 1}</td>
              <td>{doc.fullName}</td>
              <td>{doc.clinic}</td>
              <td>{doc.experience} yrs</td>
              <td>
                <span className="badge badge-warning">
                  {doc.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => onView(doc)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDoctorTable;
