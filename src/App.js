import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DocumentTitle from "react-document-title";

import "./App.scss";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import DemoPage from "./pages/DemoPage";
import ProfilePage from "./pages/ProfilePage";
import { actionGetUserAuth } from "./redux/actions/actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <DocumentTitle title="LinkedIn clone by Robert Koteles">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/signup"
            element={<SignUpPage />}
            errorElement={<ErrorPage />}
          />
          <Route path="/home" element={<Home />} errorElement={<ErrorPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/edit-profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/demo" replace />} />
        </Routes>
      </Router>
    </DocumentTitle>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => {
      dispatch(actionGetUserAuth());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
