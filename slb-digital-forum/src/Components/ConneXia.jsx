import React from "react";

const ConneXia = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-6">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Conne<span className="text-blue-500">xia</span>
        </h1>
        <div className="flex items-center space-x-4">
          <p className="font-medium">Hello, Jason</p>
          <button className="px-4 py-2 bg-blue-500 rounded-md">My Insights</button>
          <button className="px-4 py-2 bg-gray-700 rounded-md">My Apps</button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Change Point Detection Summary */}
          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Change Point Detection Summary</h2>
            <ul className="space-y-2">
              {[
                { label: "Gas interference", count: 4 },
                { label: "Possible hole in tubing", count: 3 },
                { label: "Worn out pump", count: 5 },
                { label: "Possible broken shaft", count: 0 },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.label}</span>
                  <span
                    className={`${
                      item.count > 0 ? "text-red-400" : "text-green-400"
                    } font-medium`}
                  >
                    {item.count} potential well issue(s)
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-500 rounded-md w-full">View All</button>
          </section>

          {/* Schedule */}
          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Schedule</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2">Well Name</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Job Type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "GLACIER ROCK 15", date: "04-Aug-2024", job: "Install-New" },
                  { name: "TITAN RIDGE 4", date: "22-Aug-2024", job: "Pull-EOT" },
                  { name: "HORIZON ECHO 7", date: "19-Sept-2024", job: "DFA" },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.date}</td>
                    <td className="py-2">{item.job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* Center Column */}
        <div className="space-y-6">
          {/* Production Optimization */}
          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Production Optimization</h2>
            <p className="text-sm mb-2">Optimization Potential</p>
            <div className="h-40 bg-gray-700 rounded-lg"></div>
            <div className="mt-4 flex justify-between">
              <button className="px-4 py-2 bg-blue-500 rounded-md">View Recommendations</button>
              <button className="px-4 py-2 bg-gray-700 rounded-md">View Tracked Changes</button>
            </div>
          </section>

          {/* Sustainable Production */}
          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Sustainable Production</h2>
            <p className="text-sm mb-2">Oil, Gas, and CO₂ Metrics</p>
            <div className="h-40 bg-gray-700 rounded-lg"></div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Deferred Production */}
          <section className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Deferred Production</h2>
            <p>
              Cumulative deferred production:{" "}
              <span className="font-bold text-blue-500">18,297 bbl</span>
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { name: "GLACIER ROCK 15", deferred: "11,297 bbl", hours: "187 hrs" },
                { name: "TITAN RIDGE 4", deferred: "6,200 bbl", hours: "124 hrs" },
                { name: "HORIZON ECHO 7", deferred: "800 bbl", hours: "12 hrs" },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span className="text-red-400">{item.deferred}</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 px-4 py-2 bg-gray-700 rounded-md w-full">View All</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConneXia;
