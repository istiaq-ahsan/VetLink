import React from "react";
import Button from "../../shared/Button/Button";

const DoctorEducationInput = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        শিক্ষা কনটেন্ট আপলোড করুন
      </h2>

      <div className="card bg-base-100 shadow-xl p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Disease */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">রোগের নাম</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="যেমন: পার্ভোভাইরাস"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">শিরোনাম</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="যেমন: পার্ভোভাইরাস: মারাত্মক সংক্রমণ"
            />
          </div>

          {/* Image */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="font-semibold">ছবির লিংক</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="font-semibold">রোগের বিবরণ</label>
            <textarea
              className="textarea textarea-bordered h-32 w-full"
              placeholder="রোগ সম্পর্কে বিস্তারিত লিখুন..."
            ></textarea>
          </div>

          {/* Reason */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">রোগের কারণ</label>
            <textarea
              className="textarea textarea-bordered h-28 w-full"
              placeholder="কী কারণে এই রোগ হয়..."
            ></textarea>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">সমাধান ও চিকিৎসা</label>
            <textarea
              className="textarea textarea-bordered h-28 w-full"
              placeholder="চিকিৎসা ও প্রতিরোধ পদ্ধতি লিখুন..."
            ></textarea>
          </div>

        </div>

        {/* Submit */}
        <div className="mt-8 flex justify-center">
          <Button className="">
            কনটেন্ট সাবমিট করুন (ডেমো)
          </Button>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">
          ⚠️ এটি ডেমো ফর্ম — ভবিষ্যতে ডাটাবেজের সাথে যুক্ত হবে
        </p>

      </div>
    </div>
  );
};

export default DoctorEducationInput;
