import React, { useState } from "react";
import { FaSync } from "react-icons/fa";

const ClockPage = () => {
  const [lastUpdated, setLastUpdated] = useState(
    "October 25, 2023 at 2:31 PM"
  );

  const refreshData = () => {
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setLastUpdated(formattedTime);
  };

  const wellsData = [
    { name: "GLACIER ROCK 15", operator: "Roxxon", uptime: 30, production: -20 },
    { name: "WENDIGO EAST D 706WA", operator: "Roxxon", uptime: 40, production: -10 },
    { name: "CREED HA 7 703JM", operator: "Roxxon", uptime: 35, production: -15 },
    { name: "BLOCK HA 7 704LS", operator: "Roxxon", uptime: 50, production: -25 },
    { name: "SMYRNA WEST D 3404WB", operator: "Hammer", uptime: 40, production: -30 },
    { name: "HAMILTON COTT (AJ) 1LB", operator: "A.I.M", uptime: 50, production: -35 },
    { name: "GRIDIRON N004WA", operator: "A.I.M", uptime: 55, production: -40 },
    { name: "GUARDIAN 250 E 5WA", operator: "Roxxon", uptime: 30, production: -20 },
    { name: "GUARDIAN 250 G 7MS", operator: "Roxxon", uptime: 30, production: -20 },
    { name: "GUARDIAN 253 G 7MS", operator: "Roxxon", uptime: 50, production: -20 },
  ];

  const UptimeBar = ({ uptime }) => {
    const barColor = uptime >= 50 ? "bg-green-500" : "bg-red-500";

    return (
      <div className="w-full bg-gray-600 h-4 rounded">
        <div
          className={`${barColor} h-4 rounded`}
          style={{ width: `${uptime}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-900 text-white">
      {/* Header Section */}
      <div className="px-4 py-3 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Control Room</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Last updated on {lastUpdated}</span>
            <button
              onClick={refreshData}
              className="text-white hover:text-blue-400"
            >
              <FaSync />
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex space-x-6 mt-4 border-b border-gray-700">
          <button className="text-white font-medium border-b-2 border-orange-500 px-4 py-2">
            Wells
          </button>
          <button className="text-gray-400 hover:text-white px-4 py-2">
            Tickets
          </button>
          <button className="text-gray-400 hover:text-white px-4 py-2">
            Tasks
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-4">
        {/* Well Watchlists Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Well Watchlists</h2>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
            + Build Watchlist
          </button>
        </div>

        {/* Well Watchlists Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* All Wells Card */}
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:border-blue-500 border border-transparent">
            <div className="flex justify-between items-center">
              <h3 className="text-md font-medium">All Wells</h3>
              <button className="text-gray-400 hover:text-white">...</button>
            </div>
            <p className="text-gray-400 text-sm mt-2">All active wells in region A</p>
            <p className="text-3xl font-bold mt-4">34</p>
          </div>

          {/* Shutdown Wells Card */}
          <div className="bg-gray-800 p-4 rounded-lg shadow border border-blue-500">
            <div className="flex justify-between items-center">
              <h3 className="text-md font-medium">Shutdown Wells</h3>
              <button className="text-gray-400 hover:text-white">...</button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              All wells with a shutdown status or a health score of 0
            </p>
            <p className="text-3xl font-bold mt-4">8</p>
          </div>

          {/* Low Performing Wells Card */}
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:border-blue-500 border border-transparent">
            <div className="flex justify-between items-center">
              <h3 className="text-md font-medium">Low Performing Wells</h3>
              <button className="text-gray-400 hover:text-white">...</button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              All wells with a health score below 70
            </p>
            <p className="text-3xl font-bold mt-4">10</p>
          </div>

          {/* Personal Well Watchlist Card */}
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:border-blue-500 border border-transparent">
            <div className="flex justify-between items-center">
              <h3 className="text-md font-medium">Personal Well Watchlist</h3>
              <button className="text-gray-400 hover:text-white">...</button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Wells I'm currently monitoring for optimization
            </p>
            <p className="text-3xl font-bold mt-4">10</p>
          </div>
        </div>

        {/* Shutdown Wells Table */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Shutdown Wells</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 px-4 py-2">Health Score</th>
                  <th className="border border-gray-700 px-4 py-2">Well Name</th>
                  <th className="border border-gray-700 px-4 py-2">Operator</th>
                  <th className="border border-gray-700 px-4 py-2">Uptime</th>
                  <th className="border border-gray-700 px-4 py-2">Production</th>
                  <th className="border border-gray-700 px-4 py-2">7-Day Change</th>
                </tr>
              </thead>
              <tbody>
                {wellsData.map((well, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                      }`}
                  >
                    <td className="border border-gray-700 px-4 py-2 text-center">
                      <span className="text-red-500 font-bold text-lg">0</span>
                    </td>
                    <td className="border border-gray-700 px-4 py-2">{well.name}</td>
                    <td className="border border-gray-700 px-4 py-2">{well.operator}</td>
                    <td className="border border-gray-700 px-4 py-2">
                      <UptimeBar uptime={well.uptime} />
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      <div className="text-gray-400">Trend Graph Placeholder</div>
                    </td>
                    <td
                      className={`border border-gray-700 px-4 py-2 text-red-500 font-bold`}
                    >
                      ↓ {Math.abs(well.production)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClockPage;
