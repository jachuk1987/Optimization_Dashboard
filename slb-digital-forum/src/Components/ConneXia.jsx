import React from "react";

const ConneXia = () => {
  return (
    <div className="bg-black min-h-screen text-white p-4">
      {/* Header */}
      <div className="flex flex-col gap-4">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center px-6 py-3 bg-gray-900 rounded-lg">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Conn<span className="text-red-500">e</span>xia
          </div>
          {/* Right Side - Search, Notifications, Profile */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none"
            />
            <div className="bg-gray-800 p-3 rounded-full">
              <span className="material-icons">notifications</span>
            </div>
            <div className="bg-gray-800 p-3 rounded-full">
              <span className="material-icons">account_circle</span>
            </div>
          </div>
        </div>

        {/* User Section */}
        <div className="flex justify-between items-center px-6 py-3 bg-gray-900 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <h1 className="text-lg font-semibold">Hello, Jason</h1>
          </div>
          <div className="flex gap-4">
            <button className="bg-blue-600 px-4 py-2 rounded-lg">My Insights</button>
            <button className="bg-gray-700 px-4 py-2 rounded-lg">My Apps</button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Change Point Detection Summary */}
        <div className="col-span-3 bg-gray-900 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Change point detection summary</h2>
          {[
            { label: "Gas interference", count: 4 },
            { label: "Possible hole in tubing", count: 3 },
            { label: "Worn out pump", count: 5 },
            { label: "Possible broken shaft", count: 0 },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    item.count === 0 ? "bg-green-500" : "bg-red-500"
                  } mr-3`}
                ></div>
                {item.label}
              </div>
              <span className="text-sm">{item.count} potential well issue(s)</span>
            </div>
          ))}
          <button className="mt-4 w-full bg-blue-600 py-2 rounded-md">View all</button>
        </div>

        {/* Production Optimization */}
        <div className="col-span-6 bg-gray-900 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Production optimization</h2>
          <div className="bg-gray-800 h-40 rounded-lg mb-4"></div>
          <div className="flex justify-between">
            <div>
              <p>Speed change: <span className="text-blue-500">20859</span> Bopd Increase</p>
              <p>Pump change: <span className="text-blue-500">16978</span> Bopd Increase</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-600 px-4 py-2 rounded-md">View all recommendations</button>
              <button className="bg-gray-700 px-4 py-2 rounded-md">View tracked changes</button>
            </div>
          </div>
        </div>

        {/* Deferred Production */}
        <div className="col-span-3 bg-gray-900 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Deferred production</h2>
          <p>
            Cumulative deferred production: <span className="text-blue-500">18,297 bbl</span>
          </p>
          <div className="mt-4 space-y-2">
            {[
              { name: "GLACIER ROCK 15", production: "11,297 bbl", status: "Shutdown", duration: "167 hrs" },
              { name: "TITAN RIDGE 4", production: "6,200 bbl", status: "Shutdown", duration: "124 hrs" },
              { name: "HORIZON ECHO 7", production: "800 bbl", status: "Shutdown", duration: "12 hrs" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-lg">
                <p>
                  {item.name} - {item.production}
                </p>
                <p className="text-sm text-gray-400">
                  {item.status} - {item.duration}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full bg-blue-600 py-2 rounded-md">View all</button>
        </div>

        {/* Schedule */}
        <div className="col-span-3 bg-gray-900 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Schedule</h2>
          <div className="bg-gray-800 h-40 rounded-lg"></div>
        </div>

        {/* Sustainable Production */}
        <div className="col-span-6 bg-gray-900 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Sustainable production</h2>
          <div className="bg-gray-800 h-40 rounded-lg mb-4"></div>
          <div className="flex justify-between">
            <p>Oil: <span className="text-blue-500">43,500 bbl/day</span></p>
            <p>Gas: <span className="text-blue-500">3,000 mcf/day</span></p>
          </div>
        </div>

        {/* Placeholder */}
        <div className="col-span-3 bg-gray-900 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Placeholder</h2>
          <div className="bg-gray-800 h-40 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ConneXia;