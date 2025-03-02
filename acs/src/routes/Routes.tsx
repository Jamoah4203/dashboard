import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";
import Inventory from "../pages/Inventory";
import Reports from "../pages/Reports";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
