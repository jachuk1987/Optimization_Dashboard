// Schedule Component
const Schedule = () => {
    const scheduleData = [
        { wellName: "GLACIER ROCK 15", date: "04-Aug-2024", jobType: "Install-New" },
        { wellName: "TITAN RIDGE 4", date: "22-Aug-2024", jobType: "Pull-EOT" },
        { wellName: "HORIZON ECHO 7", date: "19-Sept-2024", jobType: "DIFA" },
        { wellName: "SUMMIT PEAK 11", date: "13-Oct-2024", jobType: "Service" },
    ];

    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">Schedule</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left text-sm text-gray-400">
                    <thead>
                        <tr className="border-b border-gray-700 text-gray-500">
                            <th className="py-2 px-4">Well Name</th>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Job Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData.map((item, index) => (
                            <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                                <td className="py-2 px-4 text-blue-500 font-semibold">
                                    {item.wellName}
                                </td>
                                <td className="py-2 px-4">{item.date}</td>
                                <td className="py-2 px-4">{item.jobType}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};