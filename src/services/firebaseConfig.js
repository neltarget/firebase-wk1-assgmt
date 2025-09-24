// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoIwzhhU1XuZi84YLO28nIlplMi2Swr0Q",
  authDomain: "gen-30-1e44c.firebaseapp.com",
  projectId: "gen-30-1e44c",
  storageBucket: "gen-30-1e44c.firebasestorage.app",
  messagingSenderId: "890665039109",
  appId: "1:890665039109:web:5c29de6c11070c4ba6736c",
  measurementId: "G-C94B33LN4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export default app;