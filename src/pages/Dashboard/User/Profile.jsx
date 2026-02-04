import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../../shared/Card/ProfileCard";
import useAuth from "../../../hooks/useAuth";
import VetRequestForm from "../../../components/DashboardComponents/Form/VetRequestForm";

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [showVetForm, setShowVetForm] = useState(false);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/users?email=${user.email}`)
        .then((res) => setProfile(res.data[0]))
        .catch(console.log);
    }
  }, [user]);

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
