import React from "react";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem label="Pending Doctors" address="/dashboard/pending-doctors" />
      <MenuItem label="All Doctors" address="/dashboard/all-doctors" />
      <MenuItem label="All Users" address="/dashboard/all-user" />
    </>
  );
};

export default AdminMenu;
