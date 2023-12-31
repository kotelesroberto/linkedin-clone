import React, { useEffect, useState } from "react";
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
import JobsPage from "./pages/JobsPage";
import PostModal from "./components/Home/Wall/PostModal";
import Chat from "./components/Chat/Chat";
import DemoWarningPopup from "./components/Demo/DemoWarningPopup";
import { setCookie, getCookie, removeCookie } from "./utils/CookieManager";

import {
  actionGetUserAuth,
  actionSetUserDataIntoStore,
} from "./redux/actions/actions";
import { connect } from "react-redux";
import {
  doReadUserEntry,
  createUserEntry,
  createUserExtraEntry,
} from "./utils/userManagement";

function App(props) {
  const [demoWarning, setDemoWarning] = useState("");

  useEffect(() => {
    props.getUserAuth();
  }, []);

  // get extra data for the user when the 'user' object is changing in the REDUX store
  useEffect(() => {
    if (props.user && props.user.email) {
      doReadUserEntry({ email: props.user.email }).then((result) => {
        if (result.length) {
          // we have additional data for this user in our Firestore database
          props.setUserDataIntoStore(result[0]);
        } else {
          // need to create a new entry for this user (usually after Sign up by email/password OR Sign in by google account for the very first time)
          createUserEntry(props.user);
          createUserExtraEntry(props.user.uid, true);
        }
      });
    }
  }, [props.user && props.user.email]);

  // manage Cookie (that is only for showing/hiding the Demo warning popup message)
  const setDemoWarningInCookie = (value) => {
    setCookie("demoWarningPopup", value, 7);
    setDemoWarning(value);
  };

  // check Cookie for demo warning popup
  useEffect(() => {
    const warningCookie = getCookie("demoWarningPopup");

    if (!warningCookie) {
      setCookie("demoWarningPopup", "show", 7);
      setDemoWarning("show");
    } else {
      setDemoWarning(warningCookie);
    }
  }, []);

  return (
    <DocumentTitle title="RuleX clone by Robert Koteles">
      <>
        <Router>
          <Routes>
            <Route
              path="/signup"
              element={<SignUpPage />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/home"
              element={<Home />}
              errorElement={<ErrorPage />}
            />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/edit-profile" element={<ProfilePage />} />
            <Route path="/show-profile" element={<ProfilePage />} />
            <Route path="/in/*" element={<ProfilePage />} />
            <Route
              path="/"
              element={<LoginPage />}
              errorElement={<ErrorPage />}
            />
            <Route path="*" element={<Navigate to="/demo" replace />} />
          </Routes>
        </Router>

        {props.user && props.user.email && <PostModal />}
        {props.user && props.user.email && <Chat />}
        {demoWarning == "show" && (
          <DemoWarningPopup
            demowarning={demoWarning}
            setdemowarning={setDemoWarningInCookie}
          />
        )}
      </>
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
