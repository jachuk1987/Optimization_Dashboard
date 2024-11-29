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
        <div className="bg-gray-800 rounded-lg p-4 space-y-4 md:col-span-2">
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
    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <header className="flex justify-between items-center pb-6 border-b border-gray-800">
                <h1 className="text-3xl font-bold">Connexia Dashboard</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                {/* Card 1 */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">Change Point Detection</h2>
                </div>
                {/* Card 2 (Expanded Width) */}
                <ProductionOptimization />
                {/* Card 3 */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">Well Performance</h2>
                </div>
                {/* Card 4 */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">Maintenance</h2>
                </div>
                {/* Card 5 (Expanded Width) */}
                <div className="bg-gray-800 p-4 rounded-lg md:col-span-2">
                    <h2 className="text-lg font-semibold">Sustainable Production</h2>
                </div>
                {/* Card 6 */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">Safety Metrics</h2>
                </div>
                {/* Card 7 */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">Energy Usage</h2>
                </div>
            </div>
        </div>
    );
};

export default Connexia;
