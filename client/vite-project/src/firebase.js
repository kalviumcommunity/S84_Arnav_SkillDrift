// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6qhgCPfuiauciNkxzuB4ZN6GqTXB0FpA",
  authDomain: "skilldrift-67401.firebaseapp.com",
  projectId: "skilldrift-67401",
  storageBucket: "skilldrift-67401.appspot.com",
  messagingSenderId: "935016441181",
  appId: "1:935016441181:web:445c12f76a146c8da674b4" // ✅ This is your appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth and Google Provider setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
