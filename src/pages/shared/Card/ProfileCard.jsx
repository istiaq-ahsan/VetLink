import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "../Button/Button";
import VetRequestForm from "../../../components/DashboardComponents/Form/VetRequestForm";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  const modalRef = useRef(null);
  const axiosSecure = useAxiosSecure();

  const { data: applications = [], isLoading, error } = useQuery({
    queryKey: ["vetApplications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading profile...</p>;
  if (error) return <p>Error loading applications</p>;

  // Check if this user has a pending/approved application
  const application = applications.find((app) => app.email === profile.email);
  const showBecomeDoctorButton =
    !application || !["pending", "approved"].includes(application.status);

    console.log(application);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full flex flex-col md:flex-row items-center md:items-center gap-8 p-6">

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <img
            src={profile.photoURL}
            alt={profile.displayName}
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-3">
          <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
          <p><b>Name:</b> {profile.displayName}</p>
          <p><b>Email:</b> {profile.email}</p>
          <p><b>Role:</b> {profile.role}</p>
          <p><b>Joined:</b> {new Date(profile.created_at).toLocaleDateString()}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-4">
            <Button>Edit Profile</Button>

            {showBecomeDoctorButton && (
              <Button
                className="btn-outline"
                onClick={() => modalRef.current.showModal()}
              >
                Become a Doctor
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Vet Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <VetRequestForm modalRef={modalRef} userEmail={profile.email} />
        </div>
      </dialog>
    </div>
  );
};

export default ProfileCard;
