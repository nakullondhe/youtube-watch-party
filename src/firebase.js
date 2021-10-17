// Initialize Firebase

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCVaunx2GrotoIMoL-JGYeOthldLHXJR8s",
  authDomain: "watch-party-f78a9.firebaseapp.com",
  projectId: "watch-party-f78a9",
  storageBucket: "watch-party-f78a9.appspot.com",
  messagingSenderId: "991936927400",
  appId: "1:991936927400:web:0de8c9666cde21b9d8149d",
  measurementId: "G-HJCQDB4H5P"
});

export const db = getFirestore();
