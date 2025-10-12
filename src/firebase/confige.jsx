// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLJKK9Gf2qwJV2EIRyc77phSvhc7Paokw",
  authDomain: "add-usres-page.firebaseapp.com",
  projectId: "add-usres-page",
  storageBucket: "add-usres-page.firebasestorage.app",
  messagingSenderId: "521318433823",
  appId: "1:521318433823:web:3776fc48b776aeda78012a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
