import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/sidebar";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get("/api/inventory") // Replace with actual API
      .then(response => setInventory(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold">📦 Inventory</h1>
        <table className="w-full mt-6 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Product</th>
              <th className="border border-gray-300 px-4 py-2">Stock Level</th>
              <th className="border border-gray-300 px-4 py-2">Sold</th>
              <th className="border border-gray-300 px-4 py-2">Performance</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((_item, index) => (
              <tr key={index} className="text-center border">
                <td className="border border-gray-300 px-4 py-2">SIKACERAM 80</td>
                <td className="border border-gray-300 px-4 py-2">560</td>
                <td className="border border-gray-300 px-4 py-2">{100}</td>
                <td className="border border-gray-300 px-4 py-2">{90}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
