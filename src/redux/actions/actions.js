import { auth, providerGoogle } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

export const signInAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        console.log(result);

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        dispatch({
          type: "userState/setUser",
          user: result,
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
