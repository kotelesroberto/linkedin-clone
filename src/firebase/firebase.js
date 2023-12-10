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
  apiKey: "AIzaSyDVMiHBlA6cCJzvFC0x7iXhYN4pKqHDoI4",
  authDomain: "linkedin-clone-12ab8.firebaseapp.com",
  projectId: "linkedin-clone-12ab8",
  storageBucket: "linkedin-clone-12ab8.appspot.com",
  messagingSenderId: "949659228955",
  appId: "1:949659228955:web:d8a9d2c934f9e92e0011be"
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
