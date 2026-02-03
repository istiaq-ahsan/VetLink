import { useState } from "react";
import Sidebar from "../components/DashboardComponents/Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main
        className={`flex-1 min-h-screen overflow-y-auto bg-gray-100 dark:bg-gray-800 p-6 transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default DashboardLayout;
