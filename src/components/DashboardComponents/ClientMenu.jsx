import React from "react";
import MenuItem from "./MenuItem";

const ClientMenu = () => {
  return (
    <>
      <MenuItem label="Book Consultation" address="/dashboard/book-consultation"/>
      <MenuItem label="My Bookings" address="/dashboard/my-bookings" />
      <MenuItem label="Prescriptions" address="/dashboard/prescriptions" />
      <MenuItem label="Booking History" address="/dashboard/booking-history" />
    </>
  );
};

export default ClientMenu;
