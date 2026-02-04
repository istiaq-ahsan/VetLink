import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../../shared/Card/ProfileCard";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/users?email=${user.email}`)
        .then((res) => setProfile(res.data[0]))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {profile ? (
        <ProfileCard profile={profile} />
      ) : (
        <p className="text-gray-500">Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
