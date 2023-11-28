/**
 * Firebase latest in November 2023
 * All APIs are different from the previous version, all APIs are iported from specific Firebase packages
 *
 * Available SDKs for Firebase products
 * https://firebase.google.com/docs/web/setup#available-libraries
 */

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIUq_PQnZp_bu2ptavdTjTrJh3cgRmy4c",
  authDomain: "linkedin-clone-5e0fa.firebaseapp.com",
  projectId: "linkedin-clone-5e0fa",
  storageBucket: "linkedin-clone-5e0fa.appspot.com",
  messagingSenderId: "564959315860",
  appId: "1:564959315860:web:0a7598ed9d64415526b181",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

// initialize the Google auth provider for using google account as login method
const providerGoogle = new GoogleAuthProvider();

// Initialize Cloud Storage and get a reference to the service for assets such as images
const storage = getStorage(firebaseApp);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { db, storage, auth, providerGoogle };
