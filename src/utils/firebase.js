/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCROIcsLPpiG4H72_jvX-u1JdP-CBBdSc",
  authDomain: "kush-netflix-gpt.firebaseapp.com",
  projectId: "kush-netflix-gpt",
  storageBucket: "kush-netflix-gpt.appspot.com",
  messagingSenderId: "247484051253",
  appId: "1:247484051253:web:ac27bf224682bee01a267c",
  measurementId: "G-SMFSJS03CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
