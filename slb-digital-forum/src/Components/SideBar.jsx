import React from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaBell,
  FaClock,
  FaCog,
  FaSignOutAlt,
  FaLocationArrow
} from "react-icons/fa";
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className="h-screen w-[4%] bg-gray-900 flex flex-col justify-between items-center py-4 sticky top-0">
      {/* Top Section */}
      <div className="space-y-8 ">
        {/* Logo */}

        {/* X Button */}
        <div>
          <button
            // onClick={() => setShowComponent(true)} // Toggle visibility on click
            style={{ marginLeft: "13px" }}
            className="text-orange-500 text-4xl font-bold cursor-pointer"
          >
            <Link to={'/X'}>X</Link>
          </button>
        </div>


        {/* Icons */}
        <div className="space-y-6">
          <button className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-md hover:bg-gray-600">

            <Link to={'/'}><FaHome className="text-white text-xl" /></Link>
          </button>
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
            <FaProjectDiagram className="text-white text-xl" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
            <FaBell className="text-white text-xl" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">

            <Link to={'/Clock'}><FaClock className="text-white text-xl" /></Link>
          </button>
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">

            <Link to={'/Maps'} ><FaLocationArrow className="text-white text-xl" /></Link>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6">
        {/* User Profile */}
        <img
          src="https://via.placeholder.com/40" // Replace with your profile image URL
          alt="User Profile"
          className="w-12 h-12 rounded-full"
        />
        {/* Logout */}
        <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
          <FaSignOutAlt className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
