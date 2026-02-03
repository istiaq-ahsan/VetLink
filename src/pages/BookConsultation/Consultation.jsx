import React from "react";
import Button from "../shared/Button/Button";

const Consultation = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  calculateFee,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-100 shadow-xl p-6 space-y-8"
      >
        <h2 className="text-2xl font-bold text-center">
          Book Veterinary Consultation
        </h2>

        {/* 1️⃣ Pet Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">🐾 Pet Information</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Pet Type</label>
              <select
                className="select select-bordered w-full"
                {...register("petType", { required: true })}
              >
                <option value="">Select</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Cow</option>
                <option>Goat</option>
                <option>Bird</option>
                <option>Others</option>
              </select>
              {errors.petType && (
                <p className="text-error text-sm">Pet type is required</p>
              )}
            </div>

            <div>
              <label className="label">Pet Name</label>
              <input
                className="input input-bordered w-full"
                {...register("petName", { required: true })}
              />
            </div>

            <div>
              <label className="label">Age</label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register("age", { required: true })}
              />
            </div>
          </div>
        </div>

        {/* 2️⃣ Problem Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">🩺 Problem Information</h3>

          <div className="space-y-4">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Describe symptoms..."
              {...register("symptoms", { required: true })}
            />

            <input
              className="input input-bordered w-full"
              placeholder="Duration (e.g. 3 days)"
              {...register("duration", { required: true })}
            />

            <input
              type="file"
              className="file-input file-input-bordered w-full"
              {...register("reports")}
            />
          </div>
        </div>

        {/* 3️⃣ Consultation Type */}
        <div>
          <h3 className="text-lg font-semibold mb-4">📞 Consultation Type</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              className="select select-bordered w-full"
              {...register("category", { required: true })}
            >
              <option value="">Consultation Category</option>
              <option>General Checkup</option>
              <option>Emergency</option>
              <option>Follow-up</option>
              <option>Nutrition</option>
              <option>Vaccination Advice</option>
            </select>

            <select
              className="select select-bordered w-full"
              {...register("mode", { required: true })}
            >
              <option value="">Consultation Mode</option>
              <option value="Video">Video Call</option>
              <option value="Voice">Voice Call</option>
              <option value="Chat">Chat</option>
            </select>

            <input
              type="date"
              className="input input-bordered w-full"
              {...register("date", { required: true })}
            />

            <input
              type="time"
              className="input input-bordered w-full"
              {...register("time", { required: true })}
            />

            <select
              className="select select-bordered w-full md:col-span-2"
              {...register("vet")}
            >
              <option value="">Auto-assign Veterinarian</option>
              <option>Dr. Rahman</option>
              <option>Dr. Hasan</option>
              <option>Dr. Ahmed</option>
            </select>
          </div>
        </div>

        {/* 4️⃣ Cost Preview */}
        <div className="bg-base-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">💰 Cost Preview</h3>
          <p>
            Estimated Fee: <strong>৳ {calculateFee()}</strong>
          </p>
        </div>

        <Button type="submit" className="btn btn-success w-full">
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default Consultation;
