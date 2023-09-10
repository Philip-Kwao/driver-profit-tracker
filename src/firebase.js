// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjaBMBpuNhxF7bCIvl72TvYImjQQasTuM",
  authDomain: "expense-tracker-73cdf.firebaseapp.com",
  projectId: "expense-tracker-73cdf",
  storageBucket: "expense-tracker-73cdf.appspot.com",
  messagingSenderId: "285075554353",
  appId: "1:285075554353:web:8836eb59cca2bb29749510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)