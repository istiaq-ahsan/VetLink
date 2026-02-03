import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";

// Correct import: MenuItem (uppercase)
import MenuItem from "../../components/DashboardComponents/MenuItem";

// Import your logo
import logo from "../../assets/logo.png";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const logOut = () => {
    console.log("Logging out..."); // placeholder for now
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
        <div className="hidden md:flex w-full px-4 py-2 rounded-lg justify-center items-center bg-gray-100 mx-auto">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} className="w-8 h-8" alt="VetCare Logo" />
            <h1 className="font-bold text-lg">VetCare</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-6 space-y-2">
          <MenuItem label="Dashboard" address="/dashboard" />
          <MenuItem label="Book Consultation" address="/dashboard/book-consultation" />
          <MenuItem label="My Bookings" address="/dashboard/my-bookings" />
          <MenuItem label="Patients" address="/dashboard/patients" />
          <MenuItem label="Reports" address="/dashboard/reports" />
        </nav>

        {/* Footer */}
        <div>
          <hr />
          <MenuItem icon={FcSettings} label="Profile" address="/dashboard/profile" />
          <button
            onClick={logOut}
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
