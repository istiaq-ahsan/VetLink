import React from "react";
import location from "../../../assets/location-merchant.png";
import { Link } from "react-router";

const BeMerchant = () => {
  return (
    <div
      data-aos=""
      className="rounded-4xl lg:p-20 shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-50 "
    >
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-8">
        {/* Veterinary illustration */}
        <img
          src={location} // replace with your veterinary image
          className="max-w-sm rounded-lg "
          alt="Veterinary Support"
        />

        {/* Text content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-green-700">
            24/7 Veterinary Support for Your Livestock
          </h1>

          <p className="py-6 text-gray-700 max-w-md">
            We provide certified veterinarians and fast emergency response to
            ensure your animals are healthy and safe. Access veterinary
            assistance anytime, anywhere, with reliable guidance tailored to
            your farm’s needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-4 w-full">
            <Link to="/book" className="btn btn-outline bg-green-600 hover:bg-green-700 text-white rounded-full w-full sm:w-auto text-center px-6">
              Get Veterinary Support
            </Link>

            <Link to="/book" className="btn btn-outline hover:bg-green-600 hover:text-white rounded-full w-full sm:w-auto text-center px-6">
              Consult a Veterinarian
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
