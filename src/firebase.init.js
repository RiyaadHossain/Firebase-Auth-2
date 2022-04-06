// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJn2mZR1lDfUextKXJ6oKygtCemXCUyXE",
  authDomain: "fir-auth-2-81c3a.firebaseapp.com",
  projectId: "fir-auth-2-81c3a",
  storageBucket: "fir-auth-2-81c3a.appspot.com",
  messagingSenderId: "152845191362",
  appId: "1:152845191362:web:5105aba0a5bd483838535b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app