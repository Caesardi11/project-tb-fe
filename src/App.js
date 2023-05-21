import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Decision from "./pages/decision";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/decision" element={<Decision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
