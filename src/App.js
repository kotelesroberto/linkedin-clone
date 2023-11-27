import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DocumentTitle from "react-document-title";

import "./App.scss";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import DemoPage from "./pages/DemoPage";


function App() {
  return (
    <DocumentTitle title="LinkedIn clone by Robert Koteles">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} errorElement={<ErrorPage />} />
          <Route path="/home" element={<Home />} errorElement={<ErrorPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="*" element={<Navigate to="/demo" replace />} />
        </Routes>
      </Router>
    </DocumentTitle>
  );
}

export default App;
