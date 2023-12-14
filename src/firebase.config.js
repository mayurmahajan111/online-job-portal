// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxxxIPIhbvxULpRlKKDup3YoJwVyfFr-o",
  authDomain: "online-job-portal-90a20.firebaseapp.com",
  projectId: "online-job-portal-90a20",
  storageBucket: "online-job-portal-90a20.appspot.com",
  messagingSenderId: "288141730308",
  appId: "1:288141730308:web:cd197a25d5dcbcb4d2cb51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};