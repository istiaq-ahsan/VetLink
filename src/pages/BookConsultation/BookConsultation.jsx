import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Consultation from "./Consultation";
import useAuth from "../../hooks/useAuth";

const BookConsultation = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const urgency = watch("urgency");
  const mode = watch("mode");
  const category = watch("category");

  const calculateFee = () => {
    let fee = 0;

    // Consultation mode fee
    if (mode === "Chat") fee = 30;
    if (mode === "Voice") fee = 50;
    if (mode === "Video") fee = 100;

    // Emergency extra charge
    if (urgency === "Emergency") fee += 150;

    return fee;
  };

  const onSubmit = async (data) => {
    // 🔥 Combine date + time into ISO format
    const consultationDateTime = new Date(
      `${data.date}T${data.time}`,
    ).toISOString();

    const consultationData = {
      ...data,

      // 👤 Who booked the consultation
      userEmail: user?.email,

      // 📅 Consultation schedule (future tracking)
      consultationDate: data.date,
      consultationTime: data.time,
      consultationDateTime,

      // 💰 Meta
      fee: calculateFee(),
      status: "pending",
      creation_date: new Date().toISOString(),
    };

    const result = await Swal.fire({
      title: "Confirm Booking?",
      html: `
      <p><strong>Fee:</strong> ৳${consultationData.fee}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
    `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Book",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      console.log("Saved Data:", consultationData);

      Swal.fire({
        icon: "success",
        title: "Consultation Booked!",
        text: "✅ Your consultation has been successfully booked.",
      });

      reset();
    }
  };

  return (
    <Consultation
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      calculateFee={calculateFee}
    />
  );
};

export default BookConsultation;
