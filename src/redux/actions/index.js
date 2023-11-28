import { auth, providerGoogle } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithpopup

/* Login by Google Authentication  */
export const signInGoogleAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        console.log(result);

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
};
