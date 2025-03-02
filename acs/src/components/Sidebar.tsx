import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 fixed">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <ul className="mt-4 space-y-2">
        <li><Link to="/" className="block py-2 px-4 hover:bg-gray-700">🏠 Dashboard</Link></li>
        <li><Link to="/sales" className="block py-2 px-4 hover:bg-gray-700">💰 Sales</Link></li>
        <li><Link to="/inventory" className="block py-2 px-4 hover:bg-gray-700">📦 Inventory</Link></li>
        <li><Link to="/reports" className="block py-2 px-4 hover:bg-gray-700">📊 Reports</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
