import { db, auth, providerGoogle } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";





/*=============================================
=            FIREBASE RELATED ACTIONS         =
=============================================*/


/* Register by email and password */
export const actionRegisterByEmailAndPassAPI = (email, pass, callback) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((UserCredential) => {
        const user = UserCredential.user;
        dispatch({
          type: "userState/setUser",
          user: user,
        });
        return;
      })
      .catch((error) => {
        console.log(error.message);

        if (typeof callback === "function") {
          callback.call(this, error.message);
        }
      });
  };
};

/* Login by email and password */
export const actionSignInEmailAndPassAPI = (email, pass, callback = null) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((UserCredential) => {
        const user = UserCredential.user;
        dispatch({
          type: "userState/setUser",
          user: user,
        });
        return;
      })
      .catch((error) => {
        console.log(error.message);

        if (typeof callback === "function") {
          callback.call(this, error.message);
        }
      });
  };
};

/* Login by Google Authentication  */
// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithpopup
// Firebase Google Sign In
export const actionSignInGoogleAPI = () => {
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
        console.log("actionSignInGoogleAPI error", error);
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
export const actionGetUserAuth = () => {
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
export const actionSignOutAPI = () => {
  console.log("actionSignOutAPI was called");
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        console.log("Sign-out successful");
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


/*=====  End of FIREBASE RELATED ACTIONS  ======*/







// Set posts visibility
export const setPostVisibilityAPI = (e, newVisibility) => {
  return (dispatch) => {
    dispatch({
      type: "postSettingState/setPostVisibility",
      postSetting: {
        visibiity: newVisibility,
      },
    });
  };
};


// Set popup modal visibility
// 'addPost', 'addMedia', 'addEvent', 'addArticle', 'is-posting'
export const setShowModalAPI = (newState) => {
  console.log('setShowModalAPI newState', newState);
  return (dispatch) => {
    dispatch({
      type: "popupModalState/setShowModal",
      popupModal: {
        showModal: newState,
      },
    });
  };
};
export const setPreviousShowModalAPI = (newState) => {
  return (dispatch) => {
    dispatch({
      type: "popupModalState/setPreviousShowModal",
      popupModal: {
        previousShowModal: newState,
      },
    });
  };
};


/*
// user object:
{
  uid: '',
  bio: '',
  birthday: '',
  displayName: '',
  email: '',
  location: '',
  photoURL: '',
  teaserImage: '',
  username: '',
  emailVerified: '',
  phoneNumber: '',
}

*/