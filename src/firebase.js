/* eslint-disable no-unused-vars */
// Initialize Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCVaunx2GrotoIMoL-JGYeOthldLHXJR8s",
  authDomain: "watch-party-f78a9.firebaseapp.com",
  databaseURL: "https://watch-party-f78a9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "watch-party-f78a9",
  storageBucket: "watch-party-f78a9.appspot.com",
  messagingSenderId: "991936927400",
  appId: "1:991936927400:web:0de8c9666cde21b9d8149d",
  measurementId: "G-HJCQDB4H5P"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
