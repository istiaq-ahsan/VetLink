import React from "react";
import { Mic, Video, PhoneOff, User } from "lucide-react";

const DoctorCall = () => {
  return (
    <div className="h-screen bg-neutral flex flex-col lg:flex-row">

      {/* Left Sidebar */}
      <aside className="lg:w-72 w-full bg-base-200 p-5 flex-shrink-0 text-base-content">
        {/* Added text-base-content explicitly */}
        <h3 className="text-xl font-bold mb-4 text-gray-900">রোগীর তথ্য</h3>

        <div className="space-y-2 text-sm text-gray-800">
          <p><strong>নাম:</strong> রাহিম</p>
          <p><strong>পোষা প্রাণী:</strong> কুকুর</p>
          <p><strong>সমস্যা:</strong> খাবার খাচ্ছে না</p>
          <p><strong>সময়:</strong> 15 মিনিট</p>
        </div>

        <div className="mt-6 p-3 bg-base-100 rounded-lg shadow">
          <h4 className="font-semibold mb-2 text-gray-900">নোট</h4>
          <textarea
            className="textarea textarea-bordered w-full h-24 resize-none text-gray-900 placeholder-gray-400"
            placeholder="ডাক্তারের নোট লিখুন..."
          />
        </div>
      </aside>

      {/* Right Video + Controls */}
      <main className="flex-1 flex flex-col bg-black">

        {/* Video area */}
        <div className="flex-1 flex items-center justify-center relative">
          <User size={180} className="text-gray-400" />
          <p className="absolute bottom-6 text-white font-medium text-lg">
            রোগীর ভিডিও
          </p>

          {/* Doctor preview */}
          <div className="absolute top-6 right-6 w-36 h-28 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 shadow-lg">
            Doctor Cam
          </div>
        </div>

        {/* Controls at bottom */}
        <div className="flex justify-center items-center gap-6 p-4 bg-gray-900">
          <button className="btn btn-circle btn-outline">
            <Mic />
          </button>
          <button className="btn btn-circle btn-outline">
            <Video />
          </button>
          <button className="btn btn-circle btn-error">
            <PhoneOff />
          </button>
        </div>
      </main>
    </div>
  );
};

export default DoctorCall;
