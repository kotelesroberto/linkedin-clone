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
=            Navigation            =
=============================================*/
export const setCurrentURLAPI = (url) => {
  return (dispatch) => {
    dispatch({
      type: "pageNavigationState/setCurrentURL",
      loadedURL: url,
    });
  };
};

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
        dispatch({
          type: "pageNavigationState/setCurrentURL",
          loadedURL: "/home",
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
        dispatch({
          type: "pageNavigationState/setCurrentURL",
          loadedURL: "/home",
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
          user: {
            ...user,
            checkedByAuth: true,
          },
        });

      } else {
        // User is signed out
        dispatch({
          type: "userState/setUser",
          user: {
            checkedByAuth: true,
          },
        });
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

        dispatch({
          type: "pageNavigationState/setCurrentURL",
          loadedURL: "/",
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
export const actionSetShowModal = (newState, payloadData = {}) => {
  return (dispatch) => {
    dispatch({
      type: "popupModalState/setShowModal",
      popupModal: {
        showModal: newState,
        payloadData,
      },
    });
  };
};
export const actionSetPreviousShowModal = (newState, payloadData = {}) => {
  return (dispatch) => {
    dispatch({
      type: "popupModalState/setPreviousShowModal",
      popupModal: {
        previousShowModal: newState,
        payloadData,
      },
    });
  };
};

// Posting new post needs a trigger event that tells Feed component havng new post with images to load
export const actionIsImagesUploadDone = (postRef) => {
  return (dispatch) => {
    dispatch({
      type: "postSettingState/setImageUploadSuccess",
      isNewPostImageUploadDone: postRef,
    });
  };
};

// Set posts visibility
export const actionSetUserDataIntoStore = (userData) => {
  return (dispatch) => {
    dispatch({
      type: "userState/setUser",
      user: userData,
    });
  };
};
