import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import logo from "../../assets/logo.png";
import VetLinkLogo from "../../pages/shared/VetLinkLogo/VetLinkLogo";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AdminMenu from "./AdminMenu";
import DrMenu from "./DrMenu";
import ClientMenu from "./ClientMenu";
import MenuItem from "./MenuItem";



const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { logout, user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch user info
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`userInfo/${user?.email}`);
      return data;
    },
  });

  const { role } = userInfo || {};

  if (isLoading) return <p>Loading...</p>; // Replace with <LoadingSpinner /> if you have one

  // Determine which menu to show
  const renderMenu = () => {
    if (role === "admin") return <AdminMenu />;
    if (role === "doctor") return <DrMenu />;
    return <ClientMenu />;
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-white text-gray-800 flex justify-between px-3 items-center md:hidden">
        <Link to="/" className="flex items-center gap-2 p-4">
          <img src={logo} alt="VetCare Logo" className="w-8 h-8" />
          <h1 className="font-bold text-lg">VetCare</h1>
        </Link>
        <button
          onClick={toggleSidebar}
          className="p-3 rounded-full focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="text-2xl" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-30 md:fixed flex flex-col mt-[64px] md:mt-0 justify-between overflow-x-hidden w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out bg-white shadow-lg`}
      >
        {/* Logo */}
        <div className="hidden md:flex w-full px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-100 mx-auto">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} className="w-8 h-8" alt="" />
            <h1 className="font-bold text-lg">VetCare</h1>
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>{renderMenu()}</nav>
        </div>

        {/* Footer Items */}
        <div>
          <hr />
          <MenuItem icon={FcSettings} label="Profile" address="/dashboard/profile" />
          <button
            onClick={logout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
