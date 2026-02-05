import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProfileCard from "../../shared/Card/ProfileCard";
import useAuth from "../../../hooks/useAuth";
import VetRequestForm from "../../../components/DashboardComponents/Form/VetRequestForm";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Profile = () => {
  const { user } = useAuth();
  const [showVetForm, setShowVetForm] = useState(false);
  //const axios = useAxios();
  const axiosSecure = useAxiosSecure();

  // React Query v5
  const { data: profile, isLoading, isError, error } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      const res = await axiosSecure.get(`/users?email=${user.email}`);
      return res.data[0]; // assuming API returns an array
    },
    enabled: !!user?.email, // only fetch if email exists
    retry: 1, // retry once if failed
  });

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Error loading profile: {error.message}</p>;

  return (
    <>
      {profile && (
        <ProfileCard
          profile={profile}
          onBecomeVet={() => setShowVetForm(true)}
        />
      )}

      {showVetForm && (
        <VetRequestForm onClose={() => setShowVetForm(false)} />
      )}
    </>
  );
};

export default Profile;
