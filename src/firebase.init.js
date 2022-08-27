// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVcTE1H_NWc0y_a3QYkkk7WloAWqomXLs",
  authDomain: "login-system-af3cf.firebaseapp.com",
  projectId: "login-system-af3cf",
  storageBucket: "login-system-af3cf.appspot.com",
  messagingSenderId: "870661455289",
  appId: "1:870661455289:web:240bdb7f0486866abd4a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;