/**
 * Firebase latest in November 2023
 * All APIs are different from the previous version, all APIs are iported from specific Firebase packages
 *
 * Available SDKs for Firebase products
 * https://firebase.google.com/docs/web/setup#available-libraries
 */

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpuxzB6KThzkxblAoT7CwhA8jEG6v0O00",
  authDomain: "linkedin-clone-app-2516d.firebaseapp.com",
  projectId: "linkedin-clone-app-2516d",
  storageBucket: "linkedin-clone-app-2516d.appspot.com",
  messagingSenderId: "346995379019",
  appId: "1:346995379019:web:bb1f557c74cae9d0b036ce"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

// initialize the Google auth provider for using google account as login method
const providerGoogle = new GoogleAuthProvider();

// Initialize Cloud Storage and get a reference to the service for assets such as images
const storage = getStorage(firebaseApp);
// Create a storage reference from our storage service
const storageRef = ref(storage);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { db, storage, storageRef, auth, providerGoogle };
