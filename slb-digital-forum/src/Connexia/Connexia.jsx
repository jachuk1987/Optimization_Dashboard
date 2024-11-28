import React from "react";

const Connexia = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center pb-6 border-b border-gray-800">
        <div>
          <h1 className="text-3xl font-semibold">Connexia</h1>
          <p className="text-gray-400">Hello, Jason</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 px-4 py-2 rounded-lg">My Insights</button>
          <button className="bg-gray-800 px-4 py-2 rounded-lg">My Apps</button>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Change Point Detection Summary */}
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-semibold">Change Point Detection Summary</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="flex items-center space-x-2">
                <span className="text-red-500">⚠</span>
                <span>Gas interference</span>
              </span>
              <span>4 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center space-x-2">
                <span className="text-red-500">⚠</span>
                <span>Possible hole in tubing</span>
              </span>
              <span>3 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center space-x-2">
                <span className="text-red-500">⚠</span>
                <span>Worn out pump</span>
              </span>
              <span>5 potential well issue(s)</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Possible broken shaft</span>
              </span>
              <span>0 potential well issue(s)</span>
            </li>
          </ul>
          <button className="bg-blue-600 w-full py-2 rounded-lg text-center">View All</button>
        </div>

        {/* Production Optimization */}
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-semibold">Production Optimization</h2>
          <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">
            {/* Placeholder for Chart */}
            <span className="text-gray-400">[Chart]</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p>Speed Change</p>
              <p className="text-xl font-bold">20,859 Bopd Increase</p>
              <p className="text-gray-400">From 304 wells</p>
            </div>
            <div>
              <p>Pump Change</p>
              <p className="text-xl font-bold">16,978 Bopd Increase</p>
              <p className="text-gray-400">From 427 wells</p>
            </div>
          </div>
          <button className="bg-blue-600 w-full py-2 rounded-lg text-center">
            View All Recommendations
          </button>
        </div>

        {/* Deferred Production */}
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-semibold">Deferred Production</h2>
          <div>
            <p className="text-xl font-bold">Cumulative Deferred Production</p>
            <p className="text-3xl font-bold text-red-500">18,297 bbl</p>
          </div>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between items-center">
              <span>Glacier Rock 15</span>
              <span className="text-red-500">11,297 bbl</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Titan Ridge 4</span>
              <span className="text-red-500">6,200 bbl</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Horizon Echo 7</span>
              <span className="text-red-500">800 bbl</span>
            </li>
          </ul>
          <button className="bg-blue-600 w-full py-2 rounded-lg text-center">View All</button>
        </div>

        {/* Schedule */}
        <div className="col-span-1 lg:col-span-2 bg-gray-800 rounded-lg p-4 space-y-4">
          <h2 className="text-lg font-semibold">Schedule</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="py-2">Well Name</th>
                <th>Date</th>
                <th>Job Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Glacier Rock 15</td>
                <td>04-Aug-2024</td>
                <td>Install-New</td>
              </tr>
              <tr>
                <td className="py-2">Titan Ridge 4</td>
                <td>22-Aug-2024</td>
                <td>Pull-EOT</td>
              </tr>
              <tr>
                <td className="py-2">Horizon Echo 7</td>
                <td>19-Sept-2024</td>
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
