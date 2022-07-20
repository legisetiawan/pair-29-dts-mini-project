// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIWLwAEO40Fjt16rxT4pcVhrzJAIt7OIk",
  authDomain: "dts20072022.firebaseapp.com",
  projectId: "dts20072022",
  storageBucket: "dts20072022.appspot.com",
  messagingSenderId: "109554279492",
  appId: "1:109554279492:web:7c652662b26ef67e380811",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
