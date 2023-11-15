import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} errorElement={<ErrorPage />} />
          <Route path="/home" element={<Home />} errorElement={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
