import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cattle from "./pages/Cattle";
import Graph from "./pages/Graph";
import Table from "./pages/Table";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Drag from "./pages/Drag";

export default function App() {

  const [loginStatus, setLoginStatus] = useState({});

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
          <Route path="/detection" element={<Drag loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
          <Route path="/cattle" element={<Cattle loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
          <Route path="/table" element={Object.keys(loginStatus).length > 0 ? <Table loginStatus={loginStatus} setLoginStatus={setLoginStatus} /> : <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
          <Route path="/graph" element={Object.keys(loginStatus).length > 0 ? <Graph loginStatus={loginStatus} setLoginStatus={setLoginStatus} /> : <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
          <Route path="/login" element={<Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
          <Route path="/register" element={<Register loginStatus={loginStatus} setLoginStatus={setLoginStatus} />} />
        </Routes>
      </Router>
    </div>
  )
}