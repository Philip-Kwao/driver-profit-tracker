// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// };

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