import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpT6d1yB1WQgsc7n8zHVTPhPWRir8Hqnc",
  authDomain: "wassup-6c9ad.firebaseapp.com",
  databaseURL: "https://wassup-6c9ad.firebaseio.com",
  projectId: "wassup-6c9ad",
  storageBucket: "wassup-6c9ad.appspot.com",
  messagingSenderId: "256627062782",
  appId: "1:256627062782:web:3536d60bacaa6b1be5f2af",
  measurementId: "G-725S2BBVKV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
