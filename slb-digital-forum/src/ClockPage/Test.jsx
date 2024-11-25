

{/* Main Content */ }
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