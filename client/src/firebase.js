// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ba913.firebaseapp.com",
  projectId: "mern-blog-ba913",
  storageBucket: "mern-blog-ba913.firebasestorage.app",
  messagingSenderId: "63772773915",
  appId: "1:63772773915:web:ab8d99d3eef74ea47032be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

