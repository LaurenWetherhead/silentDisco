// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR API KEY HERE",
  authDomain: "silent-disco-4f514.firebaseapp.com",
  databaseURL: "YOUR DATA BASE URL HERE",
  projectId: "silent-disco-4f514",
  storageBucket: "silent-disco-4f514.appspot.com",
  messagingSenderId: "657299273687",
  appId: "YOUR APP ID HERE",
  measurementId: "G-GNS9YY86X6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const fbauth = firebase.auth();