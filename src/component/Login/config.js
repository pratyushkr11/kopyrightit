// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfg_MCU09rIhVOm1CnzXhEwN072II3Oyk",
  authDomain: "kopyright-854ad.firebaseapp.com",
  projectId: "kopyright-854ad",
  storageBucket: "kopyright-854ad.appspot.com",
  messagingSenderId: "225277952476",
  appId: "1:225277952476:web:28a9493ab6a635cf324f19",
  measurementId: "G-NXBYV7ZRNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider };
