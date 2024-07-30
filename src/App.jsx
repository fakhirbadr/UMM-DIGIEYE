import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Operation from "./pages/Operation";
import Stock from "./pages/Stock";
import Sidbar from "./components/Sidbar";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/operation" element={<Operation />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
