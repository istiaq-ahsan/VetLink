import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Button from "../../shared/Button/Button";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const imageFile = watch("photo");

  const handleRegistration = (data) => {
    const profileImg = data.photo[0];

    createUser(data.email, data.password)
      .then(() => {
        // 1️⃣ Store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2️⃣ Upload the photo to ImgBB
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;

        axios
          .post(image_API_URL, formData)
          .then((res) => {
            const photoURL = res.data.data.url;

            // 3️⃣ Create user in the backend database
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: photoURL,
            };

            // ✅ Use full backend URL here
            axios
              .post(`${import.meta.env.VITE_API_BASE_URL}/users`, userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  console.log("User created in the database");
                }
              })
              .catch((err) => console.log("DB user creation failed:", err));

            // 4️⃣ Update Firebase user profile
            const userProfile = {
              displayName: data.name,
              photoURL: photoURL,
            };

            updateUserProfile(userProfile)
              .then(() => {
                console.log("User profile updated successfully");
                navigate(location.state?.from || "/");
              })
              .catch((err) =>
                console.log("Firebase profile update failed:", err),
              );
          })
          .catch((err) => console.log("Image upload failed:", err));
      })
      .catch((err) => console.log("User registration failed:", err));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create Account</h1>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500">Name is required</p>}

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}

            {/* Profile Image */}
            <label className="label">Profile Image</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              accept="image/*"
              className="input"
            />

            <Button type="submit" className="mt-4">
              Register
            </Button>
          </fieldset>

          <p>
            <small>
              Already have an account?{" "}
              <Link className="btn btn-link" to="/login">
                Login
              </Link>
            </small>
          </p>
        </form>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
