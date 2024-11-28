import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Connexia</h1>
        <div className="flex items-center space-x-4">
          <p className="font-medium">Hello, Jason</p>
          <button className="bg-blue-600 px-4 py-2 rounded-lg">My Insights</button>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Change Point Detection Summary */}
        <div className="bg-gray-800 p-4 rounded-lg col-span-1">
          <h2 className="text-lg font-semibold">Change Point Detection Summary</h2>
          <ul className="space-y-3 mt-4">
            <li className="flex justify-between items-center">
              <span>Gas interference</span>
              <span className="text-red-500 font-bold">4 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Possible hole in tubing</span>
              <span className="text-red-500 font-bold">3 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Worn out pump</span>
              <span className="text-red-500 font-bold">5 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Possible broken shaft</span>
              <span className="text-green-500 font-bold">0 potential well issue(s)</span>
            </li>
          </ul>
          <button className="bg-blue-600 w-full mt-4 py-2 rounded-lg">View all</button>
        </div>

        {/* Production Optimization */}
        <div className="bg-gray-800 p-4 rounded-lg col-span-2 md:col-span-2 lg:col-span-3">
          <h2 className="text-lg font-semibold">Production Optimization</h2>
          <div className="mt-4">
            <div className="flex justify-between">
              <p>Optimization Potential</p>
              <p className="font-medium">Jun 09 - Jun 15</p>
            </div>
            <div className="bg-gray-700 h-48 rounded-lg mt-4 flex items-center justify-center">
              <p className="text-gray-500">Graph Placeholder</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-gray-400">Speed Change</p>
              <p className="font-bold text-green-500">20,859 Bopd Increase</p>
              <p className="text-sm text-gray-500">From 304 wells</p>
            </div>
            <div>
              <p className="text-gray-400">Pump Change</p>
              <p className="font-bold text-green-500">16,978 Bopd Increase</p>
              <p className="text-sm text-gray-500">From 427 wells</p>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <button className="bg-blue-600 flex-grow py-2 rounded-lg">View all recommendations</button>
            <button className="bg-gray-700 flex-grow py-2 rounded-lg">View tracked changes</button>
          </div>
        </div>

        {/* Deferred Production */}
        <div className="bg-gray-800 p-4 rounded-lg col-span-1 md:col-span-2 lg:col-span-1">
          <h2 className="text-lg font-semibold">Deferred Production</h2>
          <p className="text-gray-400 mt-2">Cumulative Deferred Production</p>
          <p className="text-3xl font-bold text-red-500">18,297 bbl</p>
          <ul className="space-y-4 mt-4">
            {/* Glacier Rock */}
            <li className="space-y-2">
              <div className="flex justify-between">
                <span>GLACIER ROCK 15</span>
                <span className="font-bold text-red-500">11,297 bbl</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "70%" }}></div>
              </div>
              <p className="text-gray-400 text-sm">Downtime: 187 hrs | Reason: Pump Failure</p>
            </li>

            {/* Titan Ridge */}
            <li className="space-y-2">
              <div className="flex justify-between">
                <span>TITAN RIDGE 4</span>
                <span className="font-bold text-red-500">6,200 bbl</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>
              <p className="text-gray-400 text-sm">Downtime: 124 hrs | Reason: Gas Interference</p>
            </li>

            {/* Horizon Echo */}
            <li className="space-y-2">
              <div className="flex justify-between">
                <span>HORIZON ECHO 7</span>
                <span className="font-bold text-red-500">800 bbl</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
              <p className="text-gray-400 text-sm">Downtime: 12 hrs | Reason: Hole in Tubing</p>
            </li>
          </ul>
          <button className="bg-blue-600 w-full mt-4 py-2 rounded-lg">View all</button>
        </div>

        {/* Sustainable Production */}
        <div className="bg-gray-800 p-4 rounded-lg col-span-1 lg:col-span-2">
          <h2 className="text-lg font-semibold">Sustainable Production</h2>
          <div className="mt-4 bg-gray-700 h-48 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Graph Placeholder</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">Oil: <span className="font-bold text-green-500">43,500 bbl/day</span></p>
            <p className="text-gray-400">Gas: <span className="font-bold text-green-500">3,000 mcf/day</span></p>
            <p className="text-gray-400">CO2e: <span className="font-bold text-green-500">3,100 kg/day</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
