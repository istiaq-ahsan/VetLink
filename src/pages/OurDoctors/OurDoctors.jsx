import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import DoctorCard from "./DoctorCard";

const OurDoctors = () => {
  const axios = useAxios();

  const { data: doctorsData = [], isLoading: loadingDoctors } = useQuery({
    queryKey: ["doctors-data"],
    queryFn: async () => {
      const res = await axios.get("/all-doctor");
      return res.data.filter(doc => doc.status === "approved");
    }
  });

  const { data: usersData = [], isLoading: loadingUsers } = useQuery({
    queryKey: ["users-data"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    }
  });

  if (loadingDoctors || loadingUsers) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // 🔗 Merge doctor + user by email
  const mergedDoctors = doctorsData.map(doc => {
    const user = usersData.find(u => u.email === doc.email);

    return {
      ...doc,
      photoURL: user?.photoURL,
      displayName: user?.displayName || doc.fullName,
    };
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Veterinarians 🐾
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mergedDoctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;

