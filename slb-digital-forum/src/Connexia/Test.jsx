import React from "react";
import { Line } from "react-chartjs-2";
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

const Connexia = () => {
    // Data for Production Optimization Chart (Card 2)
    const productionOptimizationData = {
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
                {/* Card 1: Change Point Detection Summary */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">
                        Change Point Detection Summary
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition">
                            <div>
                                <p className="font-medium">Gas interference</p>
                                <p className="text-sm text-gray-400">Severity: High</p>
                            </div>
                            <div>
                                <span className="font-bold text-red-500">4 issues</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Card 2: Production Optimization */}
                <div className="bg-gray-800 rounded-lg p-4 space-y-4">
                    <h2 className="text-lg font-semibold">Production Optimization</h2>
                    <div className="h-40">
                        <Line data={productionOptimizationData} options={chartOptions} />
                    </div>
                </div>

                {/* Card 3: Deferred Production */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">Deferred Production</h2>
                </div>

                {/* Card 4: Schedule */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">Schedule</h2>
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="text-gray-400">Well Name</th>
                                <th className="text-gray-400">Date</th>
                                <th className="text-gray-400">Job Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GLACIER ROCK 15</td>
                                <td>04-Aug-2024</td>
                                <td>Install-New</td>
                            </tr>
                        </tbody>
                    </table>
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
            </div>
        </div>
    );
};

export default Connexia;
