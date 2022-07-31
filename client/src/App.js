import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detection from "./pages/Detection";
import Cattle from "./pages/Cattle";
import Graph from "./pages/Graph";
import Table from "./pages/Table";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detection" element={<Detection />} />
          <Route path="/cattle" element={<Cattle />} />
          <Route path="/table" element={<Table />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </Router>
    </div>
  )
}