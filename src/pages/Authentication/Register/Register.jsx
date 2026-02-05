import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import Button from "../../shared/Button/Button";
import useAxios from "../../../hooks/useAxios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    try {
      // 1️⃣ Create user with email/password
      const result = await createUser(data.email, data.password);
      console.log("Firebase user created:", result.user);

      // 2️⃣ Prepare user info for backend
      const userInfo = {
        email: data.email,
        displayName: data.name,
        photoURL: profilePic,
        role: "user",
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      // 3️⃣ Save user to backend
      const userRes = await axiosInstance.post("/users", userInfo);
      console.log("User saved to DB:", userRes.data);

      // 4️⃣ Update Firebase profile
      await updateUserProfile({ displayName: data.name, photoURL: profilePic });
      console.log("Firebase profile updated");

      // 5️⃣ Redirect
      navigate(location.state?.from || "/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleImageUpload = async (e) => {
    try {
      const image = e.target.files[0];
      if (!image) return;

      const formData = new FormData();
      formData.append("image", image);

      const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;
      const res = await axios.post(imgUploadUrl, formData);

      setProfilePic(res.data.data.url);
      console.log("Image uploaded:", res.data.data.url);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500">Name is required</p>}

            {/* Profile Image */}
            <label className="label">Profile Image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="input"
            />

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

            <Button type="submit" className="">
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

        <div className="flex justify-center">
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
