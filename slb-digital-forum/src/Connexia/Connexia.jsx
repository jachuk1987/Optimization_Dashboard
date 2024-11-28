import React from "react";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

const Connexia = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center pb-6 border-b border-gray-800">
        <div>
          <h1 className="text-3xl font-bold">Connexia</h1>
          <p className="text-gray-400">Hello, Jason</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-600 px-4 py-2 rounded-lg">My Insights</button>
          <button className="bg-gray-800 px-4 py-2 rounded-lg">My Apps</button>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Change Point Detection Summary */}
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-semibold">Change Point Detection Summary</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaExclamationTriangle className="text-red-500" />
                <span>Gas interference</span>
              </div>
              <span>4 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaExclamationTriangle className="text-red-500" />
                <span>Possible hole in tubing</span>
              </div>
              <span>3 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaExclamationTriangle className="text-red-500" />
                <span>Worn out pump</span>
              </div>
              <span>5 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500" />
                <span>Possible broken shaft</span>
              </div>
              <span>0 potential well issue(s)</span>
            </li>
          </ul>
          <button className="bg-blue-600 w-full py-2 rounded-lg">View All</button>
        </div>

        {/* Production Optimization */}
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-semibold">Production Optimization</h2>
          <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">
            {/* Placeholder for Chart */}
            <span className="text-gray-400">[Chart Placeholder]</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Speed Change</p>
              <p className="text-xl font-bold">20,859 Bopd Increase</p>
              <p className="text-gray-400">From 304 wells</p>
            </div>
            <div>
              <p className="text-gray-400">Pump Change</p>
              <p className="text-xl font-bold">16,978 Bopd Increase</p>
              <p className="text-gray-400">From 427 wells</p>
            </div>
          </div>
          <button className="bg-blue-600 w-full py-2 rounded-lg">View All Recommendations</button>
        </div>

        {/* Deferred Production */}
<div className="bg-gray-800 rounded-lg p-4 space-y-4">
  <h2 className="text-lg font-semibold">Deferred Production</h2>
  <div>
    <p className="text-gray-400">Cumulative Deferred Production</p>
    <p className="text-3xl font-bold text-red-500">18,297 bbl</p>
  </div>
  <ul className="space-y-4">
    {/* Well 1 */}
    <li className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold">GLACIER ROCK 15</span>
        <span className="text-red-500 font-bold">11,297 bbl</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div className="bg-red-500 h-2 rounded-full" style={{ width: "70%" }}></div>
      </div>
      <div className="text-sm text-gray-400">
        <p>Downtime: <span className="font-semibold">187 hrs</span></p>
        <p>Reason: <span className="font-semibold">Pump Failure</span></p>
      </div>
      <button className="bg-blue-600 px-4 py-2 text-sm rounded-lg">View Details</button>
    </li>

    {/* Well 2 */}
    <li className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold">TITAN RIDGE 4</span>
        <span className="text-red-500 font-bold">6,200 bbl</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div className="bg-red-500 h-2 rounded-full" style={{ width: "40%" }}></div>
      </div>
      <div className="text-sm text-gray-400">
        <p>Downtime: <span className="font-semibold">124 hrs</span></p>
        <p>Reason: <span className="font-semibold">Gas Interference</span></p>
      </div>
      <button className="bg-blue-600 px-4 py-2 text-sm rounded-lg">View Details</button>
    </li>

    {/* Well 3 */}
    <li className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold">HORIZON ECHO 7</span>
        <span className="text-red-500 font-bold">800 bbl</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div className="bg-red-500 h-2 rounded-full" style={{ width: "10%" }}></div>
      </div>
      <div className="text-sm text-gray-400">
        <p>Downtime: <span className="font-semibold">12 hrs</span></p>
        <p>Reason: <span className="font-semibold">Hole in Tubing</span></p>
      </div>
      <button className="bg-blue-600 px-4 py-2 text-sm rounded-lg">View Details</button>
    </li>
  </ul>
  <button className="bg-blue-600 w-full py-2 rounded-lg mt-4">View All</button>
</div>


        {/* Schedule Section */}
        <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-semibold">Schedule</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-2">Well Name</th>
                <th>Date</th>
                <th>Job Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">GLACIER ROCK 15</td>
                <td>04-Aug-2024</td>
                <td>Install-New</td>
              </tr>
              <tr>
                <td className="py-2">TITAN RIDGE 4</td>
                <td>22-Aug-2024</td>
                <td>Pull-EOT</td>
              </tr>
              <tr>
                <td className="py-2">HORIZON ECHO 7</td>
                <td>19-Sep-2024</td>
                <td>DIFA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Connexia;
