import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import Sidebar from "../components/sidebar";

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/api/dashboard") // Replace with actual API
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 p-6 w-full">
                <h1 className="text-2xl font-bold">📊 Dashboard</h1>
                <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="bg-blue-500 text-white p-4 rounded-lg">💰 Total Sales: GHS 50,000</div>
                    <div className="bg-red-500 text-white p-4 rounded-lg">📦 Total Purchases: GHS 30,000</div>
                    <div className="bg-green-500 text-white p-4 rounded-lg">📈 Profit: GHS 20,000</div>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Sales Overview</h2>
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
