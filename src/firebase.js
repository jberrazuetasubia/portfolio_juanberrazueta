// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDu_P4GFlZFOMx9OkrVdSoRoRnNj2nAFk",
  authDomain: "portfolio-juanberrazueta.firebaseapp.com",
  projectId: "portfolio-juanberrazueta",
  storageBucket: "portfolio-juanberrazueta.firebasestorage.app",
  messagingSenderId: "689330041043",
  appId: "1:689330041043:web:f6275236561fe3602aa426",
  measurementId: "G-JMD9N55VD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);