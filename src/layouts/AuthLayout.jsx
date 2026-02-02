import React from "react";
import Login from "../pages/Authentication/Login/Login";
import { Outlet } from "react-router";
import loginimage from "../../src/assets/service/login-pana.png";
import VetLinkLogo from "../pages/shared/VetLinkLogo/VetLinkLogo";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl relative">
        {/* Logo inside card (top-left) */}
        <div className="absolute top-4 left-4">
          <a href="/"><VetLinkLogo /></a>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 p-10 pt-16">
          {/* Image */}
          <img
            src={loginimage}
            className="w-full max-w-sm rounded-lg hidden lg:block"
            alt="Login"
          />

          {/* Login Form */}
          <div className="w-full max-w-md mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
