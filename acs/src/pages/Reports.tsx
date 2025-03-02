import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import Sidebar from "../components/sidebar";

const Reports = () => {
  const [profitLoss, setProfitLoss] = useState([]);
  const [salespersons, setSalespersons] = useState([]);

  useEffect(() => {
    axios.get("/api/profit-loss") // Replace with actual API
      .then(response => setProfitLoss(response.data))
      .catch(error => console.log(error));

    axios.get("/api/salespersons") // Replace with actual API
      .then(response => setSalespersons(response.data))
      .catch(error => console.log(error));
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold">📊 Reports</h1>

        {/* Profit/Loss Chart */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">💰 Profit/Loss Analysis</h2>
          <LineChart width={600} height={300} data={profitLoss}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
            <Line type="monotone" dataKey="loss" stroke="#ff7300" />
          </LineChart>
        </div>

        {/* Salespersons Performance */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">🏆 Top Salespersons</h2>
          <PieChart width={400} height={300}>
            <Pie data={salespersons} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="sales">
              {salespersons.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Reports;
