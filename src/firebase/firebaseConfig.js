// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFEwnn75dlQ2HGIppTYJ45aDfM2dmQvU8",
  authDomain: "todo-app-d088f.firebaseapp.com",
  projectId: "todo-app-d088f",
  storageBucket: "todo-app-d088f.firebasestorage.app",
  messagingSenderId: "994038462275",
  appId: "1:994038462275:web:01861356de3561431ee1f6",
  measurementId: "G-WXKH6SRK74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);