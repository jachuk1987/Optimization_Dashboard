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
} from "chart.js";

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
            </div>
        </div>
    );
};

export default Connexia;
