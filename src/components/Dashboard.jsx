import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Operation from "../pages/Operation";
import Stock from "../pages/Stock";
import Navbar from "./Navbar";
import Sidbar from "../components/Sidbar";
import { useState } from "react";
import Users from "../pages/Users";
import Location from "./Location";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <BrowserRouter>
      <div className={`flex ${sidebarToggle ? "" : "ml-64"} w-full`}>
        <div className="flex-1">
          <Navbar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
          <Location />
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/operation" element={<Operation />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/users" element={<Users />} />
            <Route path="/location" element={<Location />} />{" "}
            {/* Route pour afficher l'emplacement actuel */}
            {/* Add a default route if needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
