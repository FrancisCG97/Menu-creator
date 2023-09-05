import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcnULp8byfCYV3WjmfcXDCvm_-61VOdSo",
  authDomain: "menu-creator-595be.firebaseapp.com",
  projectId: "menu-creator-595be",
  storageBucket: "menu-creator-595be.appspot.com",
  messagingSenderId: "1043520935163",
  appId: "1:1043520935163:web:50653180ca198bad088c5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);