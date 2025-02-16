// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Ensure Firestore is imported

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFEwnn75dlQ2HGIppTYJ45aDfM2dmQvU8',
  authDomain: 'todo-app-d088f.firebaseapp.com',
  projectId: 'todo-app-d088f',
  storageBucket: "todo-app-d088f.appspot.com", // Fix potential typo here
  messagingSenderId: "994038462275",
  appId: "1:994038462275:web:01861356de3561431ee1f6",
  measurementId: "G-WXKH6SRK74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Export db so it can be imported in firebaseFunctions.js
export { db };
