import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/sidebar";

function Sales() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        axios.get("/api/sales") // Replace with actual API
            .then(response => setSales(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 p-6 w-full">
                <h1 className="text-2xl font-bold">💰 Sales</h1>
                <table className="w-full mt-6 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Customer</th>
                            <th className="border border-gray-300 px-4 py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((_sale, index) => (
                            <tr key={index} className="text-center border">
                                <td className="border border-gray-300 px-4 py-2">{22-2-25}</td>
                                <td className="border border-gray-300 px-4 py-2">{'JUSTICE'}</td>
                                <td className="border border-gray-300 px-4 py-2">{'GHC5000.00'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Sales;
