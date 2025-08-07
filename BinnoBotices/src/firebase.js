// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE9j2F5i6E90ESC0F086bJqjva96c4-Ks",
  authDomain: "binnobotices.firebaseapp.com",
  projectId: "binnobotices",
  storageBucket: "binnobotices.firebasestorage.app",
  messagingSenderId: "377635411005",
  appId: "1:377635411005:web:5cfea7e36fa8baf7864654",
  measurementId: "G-31SXF38GWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
