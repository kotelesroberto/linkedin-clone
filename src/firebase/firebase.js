import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIUq_PQnZp_bu2ptavdTjTrJh3cgRmy4c",
  authDomain: "linkedin-clone-5e0fa.firebaseapp.com",
  projectId: "linkedin-clone-5e0fa",
  storageBucket: "linkedin-clone-5e0fa.appspot.com",
  messagingSenderId: "564959315860",
  appId: "1:564959315860:web:0a7598ed9d64415526b181",
};

// Initialize Firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database (Cloud Firestore))
const db = firebaseApp.firestore();

// initialize the authentication ()
const auth = firebaseApp.auth();

// initialize the Google auth provider for using google account as login method
const provider = new firebase.GoogleAuthProvider();

// initialize the storage for assets such as images
const storage = firebase.storage();

export { db, auth, provider, storage };
