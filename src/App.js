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
import {
  actionGetUserAuth,
  actionSetUserDataIntoStore,
} from "./redux/actions/actions";
import { connect } from "react-redux";
import { doReadUserEntry, CreateUserEntry } from "./utils/userManagement";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  // get extra data for the user when the 'user' object is changing in the REDUX store
  useEffect(() => {
    if (props.user) {
      doReadUserEntry({ email: props.user.email }).then((result) => {
        console.log('result.length', result.length);
        if (result.length) {
          // we have additional data for this user in our Firestore database
          props.setUserDataIntoStore(result[0]);
        } else {
          console.log('call: CreateUserEntry');
          // need to create a new entry for this user (usually after Sign up by email/password OR Sign in by google account for the very first time)
          CreateUserEntry(props.user);
        }
      });
    }
  }, [props.user && props.user.email]);

  return (
    <DocumentTitle title="LinkedX clone by Robert Koteles">
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
          <Route path="/show-profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/demo" replace />} />
        </Routes>
      </Router>
    </DocumentTitle>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => {
      dispatch(actionGetUserAuth());
    },
    setUserDataIntoStore: (data) => {
      dispatch(actionSetUserDataIntoStore(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
