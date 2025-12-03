import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC44eSVLkPFgWXbRb6xaR0A-zo3mLqVV40",
  authDomain: "prepwise-10cc1.firebaseapp.com",
  projectId: "prepwise-10cc1",
  storageBucket: "prepwise-10cc1.firebasestorage.app",
  messagingSenderId: "392069177322",
  appId: "1:392069177322:web:4294a46777322e8cb09c93",
  measurementId: "G-BLB3ZXXEND",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
