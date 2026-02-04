import React from "react";
import Button from "../Button/Button";

const ProfileCard = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-100 ">
      <div className="flex flex-col md:flex-row items-center p-5 bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200 max-w-4xl w-full">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile.photoURL}
            alt={profile.displayName}
            className="w-48 h-48 object-cover rounded-l-xl border-r border-gray-200 "
          />
        </div>

        {/* User Info */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">User Profile</h1>

          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              <span className="font-semibold">Name:</span> {profile.displayName}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {profile.email}
            </p>
            <p>
              <span className="font-semibold">Role:</span> {profile.role}
            </p>
            <p>
              <span className="font-semibold">Joined:</span>{" "}
              {new Date(profile.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Optional Edit Button */}
          <div className="mt-8">
            <Button className="">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
