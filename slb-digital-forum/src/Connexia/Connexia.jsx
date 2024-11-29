import React from "react";
import { Line } from "react-chartjs-2";
import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} 
from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const ProductionOptimization = () => {
    // Chart data
    const chartData = {
        labels: ["Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15"],
        datasets: [
            {
                label: "Potential production rate",
                data: [160000, 170000, 175000, 180000, 185000, 190000, 200000],
                borderColor: "#34d399",
                backgroundColor: "#34d399",
                borderWidth: 2,
            },
            {
                label: "Current production rate",
                data: [140000, 145000, 150000, 155000, 160000, 162000, 165000],
                borderColor: "#38bdf8",
                backgroundColor: "#38bdf8",
                borderWidth: 2,
            },
        ],
    };

    // Chart options
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "#d1d5db", // Text color
                },
            },
        },
        scales: {
            x: {
                ticks: { color: "#d1d5db" },
                grid: { color: "#374151" },
            },
            y: {
                ticks: { color: "#d1d5db" },
                grid: { color: "#374151" },
            },
        },
    };

    return (
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-semibold">Production Optimization</h2>
            <div className="h-40">
                {/* Chart */}
                <Line data={chartData} options={chartOptions} />
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
            <button className="bg-blue-600 w-full py-2 rounded-lg hover:bg-blue-700 transition">
                View All Recommendations
            </button>
        </div>
    );
};

const Connexia = () => {
    const issues = [
        {
            type: "Gas interference",
            count: 4,
            severity: "High",
            color: "text-red-500",
        },
        {
            type: "Possible hole in tubing",
            count: 3,
            severity: "High",
            color: "text-red-500",
        },
        {
            type: "Worn out pump",
            count: 5,
            severity: "High",
            color: "text-red-500",
        },
        {
            type: "Possible broken shaft",
            count: 0,
            severity: "Low",
            color: "text-green-500",
        },
    ];

    const scheduleData = [
        { wellName: "GLACIER ROCK 15", date: "04-Aug-2024", jobType: "Install-New" },
        { wellName: "TITAN RIDGE 4", date: "22-Aug-2024", jobType: "Pull-EOT" },
        { wellName: "HORIZON ECHO 7", date: "19-Sept-2024", jobType: "DIFA" },
        { wellName: "SUMMIT PEAK 11", date: "13-Oct-2024", jobType: "Service" },
    ];

    // Data for Sustainable Production Chart (Card 5)
    const sustainableProductionData = {
        labels: ["Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15"],
        datasets: [
            {
                label: "Oil",
                data: [500, 550, 600, 650, 700, 750, 800],
                borderColor: "#34d399",
                backgroundColor: "rgba(52, 211, 153, 0.3)",
                borderWidth: 2,
            },
            {
                label: "Gas",
                data: [300, 320, 350, 370, 400, 450, 500],
                borderColor: "#38bdf8",
                backgroundColor: "rgba(56, 189, 248, 0.3)",
                borderWidth: 2,
            },
            {
                label: "CO2e",
                data: [700, 720, 740, 760, 800, 850, 900],
                borderColor: "#f87171",
                backgroundColor: "rgba(248, 113, 113, 0.3)",
                borderWidth: 2,
            },
        ],
    };

    // Common Chart Options
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: { color: "#d1d5db" },
            },
        },
        scales: {
            x: {
                ticks: { color: "#d1d5db" },
                grid: { color: "#374151" },
            },
            y: {
                ticks: { color: "#d1d5db" },
                grid: { color: "#374151" },
            },
        },
    };

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
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
                        Change Point Detection Summary
                    </h2>
                    <ul className="space-y-4">
                        {issues.map((issue, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                            >
                                <div>
                                    <p className="font-medium">{issue.type}</p>
                                    <p className="text-sm text-gray-400">Severity: {issue.severity}</p>
                                </div>
                                <div>
                                    <span className={`font-bold ${issue.color}`}>
                                        {issue.count} issue{issue.count !== 1 ? "s" : ""}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-blue-600 w-full mt-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        View all
                    </button>
                </div>

                {/* Production Optimization */}
                <ProductionOptimization />

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

                {/* Schedule */}
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

                {/* Card 5: Sustainable Production */}
                <div className="bg-gray-800 rounded-lg p-4 space-y-4">
                    <h2 className="text-lg font-semibold">Sustainable Production</h2>
                    <div className="flex justify-between items-center">
                        <div className="space-x-4">
                            <span className="text-sm text-gray-400">Oil</span>
                            <span className="text-xl font-bold text-green-400">43,500 bbl/day</span>
                        </div>
                        <div className="space-x-4">
                            <span className="text-sm text-gray-400">Gas</span>
                            <span className="text-xl font-bold text-blue-400">3,000 mcf/day</span>
                        </div>
                        <div className="space-x-4">
                            <span className="text-sm text-gray-400">CO2e</span>
                            <span className="text-xl font-bold text-red-400">3,100 kg/day</span>
                        </div>
                    </div>
                    <div className="h-40">
                        <Line data={sustainableProductionData} options={chartOptions} />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="space-y-2">
                            <p className="text-red-400 text-lg font-bold">9</p>
                            <p className="text-gray-400 text-sm">Active emission events</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-red-400 text-lg font-bold">11</p>
                            <p className="text-gray-400 text-sm">Active alerts</p>
                        </div>
                        <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">View all emission alarms</button>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    {/* <h2 className="text-lg font-semibold mb-4">Predicted Production</h2>
                    <div className="h-40">
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <div className="space-y-2">
                            <p className="font-bold text-lg text-yellow-400">3.5%</p>
                            <p className="text-sm text-gray-400">Predicted weekly increase</p>
                        </div>
                        <div>
                            <button className="bg-blue-600 px-4 py-2 rounded-lg">More Insights</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Connexia;
