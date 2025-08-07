import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFuQetMIR1Q2z9X4AuqVk8iRzZ_gzFvK8",
  authDomain: "binno-botices.firebaseapp.com",
  projectId: "binno-botices",
  storageBucket: "binno-botices.firebasestorage.app",
  messagingSenderId: "1059895091516",
  appId: "1:1059895091516:web:c235b2e8f286a3d2fb7e39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
