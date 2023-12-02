import { db, auth, providerGoogle } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

/* Register by email and password */
export const registerByEmailAndPassAPI = (email, pass, callback) => {
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
export const signInEmailAndPassAPI = (email, pass, callback = null) => {
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
export const signInGoogleAPI = () => {
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
        console.log("signInGoogleAPI error", error);
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
  console.log("signOutAPI was called");
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

// Firebase save content into Firestore 'database'
export const doPostContentIntoFirebase = async (collectionName, contentObj, callback) => {
  // save into Firebase database
  try {
    const docRef = await addDoc(collection(db, collectionName), contentObj);
    console.log("Document written with ID: ", docRef.id);

    // run callback
    if (typeof callback === "function") {
      callback.call(this, docRef);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


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