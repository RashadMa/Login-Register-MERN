// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-mern-ab694.firebaseapp.com",
  projectId: "auth-mern-ab694",
  storageBucket: "auth-mern-ab694.appspot.com",
  messagingSenderId: "763378275870",
  appId: "1:763378275870:web:128f4e570eee1d4d67400f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);