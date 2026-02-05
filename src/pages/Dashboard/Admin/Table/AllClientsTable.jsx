import React from "react";

const AllClientsTable = ({ clients }) => {
  return (
    <div className="overflow-x-auto bg-base-100 rounded shadow">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined</th>
            <th>Last Login</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((user, i) => (
            <tr key={user._id}>
              <td>{i + 1}</td>

              <td>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>

              <td>{user.displayName}</td>
              <td>{user.email}</td>

              <td>
                <span className="badge badge-info">
                  {user.role}
                </span>
              </td>

              <td>
                {new Date(user.created_at).toLocaleDateString()}
              </td>

              <td>
                {new Date(user.last_log_in).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {clients.length === 0 && (
        <p className="text-center py-6 text-gray-500">
          No clients found
        </p>
      )}
    </div>
  );
};

export default AllClientsTable;
