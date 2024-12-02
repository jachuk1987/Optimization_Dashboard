import React from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaBell,
  FaClock,
  FaSignOutAlt,
  FaLocationArrow,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// Placeholder components for different pages
const Home = () => <div className="p-4">Welcome to the Home Page!</div>;
const Projects = () => <div className="p-4">Welcome to the Projects Page!</div>;
const Notifications = () => <div className="p-4">Welcome to the Notifications Page!</div>;
const Clock = () => <div className="p-4">Welcome to the Clock Page!</div>;
const Maps = () => <div className="p-4">Welcome to the Maps Page!</div>;

const SideBar = () => {
  const location = useLocation(); // Get the current route

  // Define a mapping of routes to components
  const routeComponentMap = {
    "/": <Home />,
    "/projects": <Projects />,
    "/notifications": <Notifications />,
    "/clock": <Clock />,
    "/maps": <Maps />,
  };

  // Check if the current route is a valid link
  const isLinkRoute = Object.keys(routeComponentMap).includes(location.pathname);

  return (
    <div className="flex">
      {/* Sidebar */}
      {!isLinkRoute && ( // Display sidebar only when not in a link route
        <div className="h-screen w-[4%] bg-gray-900 flex flex-col justify-between items-center py-4 sticky top-0">
          {/* Top Section */}
          <div className="space-y-8">
            {/* X Button */}
            <div>
              <Link to="/" className="text-orange-500 text-4xl font-bold cursor-pointer">
                X
              </Link>
            </div>

            {/* Icons */}
            <div className="space-y-6">
              <Link to="/">
                <button className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-md hover:bg-gray-600">
                  <FaHome className="text-white text-xl" />
                </button>
              </Link>
              <Link to="/projects">
                <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
                  <FaProjectDiagram className="text-white text-xl" />
                </button>
              </Link>
              <Link to="/notifications">
                <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
                  <FaBell className="text-white text-xl" />
                </button>
              </Link>
              <Link to="/clock">
                <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
                  <FaClock className="text-white text-xl" />
                </button>
              </Link>
              <Link to="/maps">
                <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
                  <FaLocationArrow className="text-white text-xl" />
                </button>
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-6">
            <img
              src="https://via.placeholder.com/40"
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />
            <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
              <FaSignOutAlt className="text-white text-xl" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1">{isLinkRoute ? routeComponentMap[location.pathname] : <div className="p-4">Default Content</div>}</div>
    </div>
  );
};

export default SideBar;
