import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../pages/shared/Button/Button";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";

const VetRequestForm = ({ modalRef, userEmail }) => {
  const [submitted, setSubmitted] = useState(false);
  const axiosSecure = useAxiosSecure();
  const axios = useAxios();
  const {user} = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // If you want to upload the degree file first, do it here and get degreeURL
      let degreeURL = "";
      if (data.degree && data.degree[0]) {
        const formData = new FormData();
        formData.append("image", data.degree[0]);
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`,
          formData,
        );
        degreeURL = res.data.data.url;
      }

      // Prepare request body
      const requestBody = {
        fullName: data.fullName,
        clinic: data.clinic,
        license: data.license,
        degreeURL,
        experience: data.experience,
        email: user?.email || ""
      };
      

      const response = await axiosSecure.post("/apply-doctor", requestBody);

      console.log("Vet request submitted:", response.data);
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Failed to submit application:", error);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Become a Veterinarian
      </h2>

      {!submitted ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            placeholder="Full Name"
            className="input input-bordered w-full"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">Full name is required</p>
          )}

          <input
            placeholder="Clinic or Hospital"
            className="input input-bordered w-full"
            {...register("clinic", { required: true })}
          />
          {errors.clinic && (
            <p className="text-sm text-red-500">Clinic is required</p>
          )}

          <input
            placeholder="License Number"
            className="input input-bordered w-full"
            {...register("license", { required: true })}
          />
          {errors.license && (
            <p className="text-sm text-red-500">License is required</p>
          )}

          <input
            type="file"
            className="file-input file-input-bordered w-full"
            {...register("degree")}
          />

          <input
            type="number"
            placeholder="Years of Experience"
            className="input input-bordered w-full"
            {...register("experience", { required: true, min: 0 })}
          />
          {errors.experience && (
            <p className="text-sm text-red-500">Experience is required</p>
          )}

          <div className="flex justify-end gap-2 mt-3">
            <Button type="submit" className="">
              Submit
            </Button>
            <Button
              type="button"
              className=""
              onClick={() => modalRef.current.close()}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div className="text-center py-6 space-y-3">
          <p className="font-medium text-green-600">
            Application sent successfully!
          </p>
          <span className="badge badge-warning">⏳ Pending Approval</span>
          <div>
            <button
              className="btn btn-sm mt-2"
              onClick={() => modalRef.current.close()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VetRequestForm;
