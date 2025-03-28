import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DoctorMenu from "./components/DoctorMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor-menu" element={<DoctorMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
