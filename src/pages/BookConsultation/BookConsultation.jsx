import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Consultation from "./Consultation";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BookConsultation = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const urgency = watch("urgency");
  const mode = watch("mode");

  const calculateFee = () => {
    let fee = 0;
    if (mode === "Chat") fee = 30;
    if (mode === "Voice") fee = 50;
    if (mode === "Video") fee = 100;
    if (urgency === "Emergency") fee += 150;
    return fee;
  };

  // ✅ TanStack Query v5 syntax
  const doctorsQuery = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users?role=doctor");
      return res.data;
    },
    staleTime: 1000 * 60 * 5, // cache for 5 min
  });

  const { data: doctors = [], isLoading } = doctorsQuery;

  const onSubmit = async (data) => {
    const consultationDateTime = new Date(`${data.date}T${data.time}`).toISOString();

    const consultationData = {
      ...data,
      userEmail: user?.email,
      consultationDate: data.date,
      consultationTime: data.time,
      consultationDateTime,
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
      try {
        const res = await axiosSecure.post("/bookings", consultationData);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Consultation Booked!",
            text: "✅ Your consultation has been successfully booked.",
          });
        }
      } catch (err) {
        console.error("Booking failed:", err);
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: "❌ Something went wrong. Please try again.",
        });
      }
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
      doctors={doctors}
      isLoadingDoctors={isLoading}
      setValue={setValue}
    />
  );
};

export default BookConsultation;
