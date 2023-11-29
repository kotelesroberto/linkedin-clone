import { auth, providerGoogle } from "../../firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

/* Login by Google Authentication  */
// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithpopup
export const ___signInAPI = () => {
  console.log("calling signInAPI");
  return (dispatch) => {
    dispatch({
      type: "userState/setUser",
      user: { email: "abcd@aaa.com" },
    });
  };
};

// Firebase Google Sign In
export const signInAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        console.log(result);
        dispatch({
          type: "userState/setUser",
          user: result.user,
        });
      })
      .catch((error) => {
        console.log("signInAPI error", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
};

// Firebase checks the user login status
export const getUserAuth = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      // user is already logged in
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        dispatch({
          type: "userState/setUser",
          user: user,
        });
      } else {
        // User is signed out
      }
    });
  };
};

// Firebase Sign Out
export const signOutAPI = () => {
  console.log('signOutAPI was called');
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        console.log('Sign-out successful');
        dispatch({
          type: "userState/setUser",
          user: null,
        });
      })
      .catch((error) => {
        // An error happened.
        console.error(error.message);
      });
  };
};
