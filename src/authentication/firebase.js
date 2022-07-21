// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,signOut} from 'firebase/auth'
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

const registerDenganEmailDanPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Pada aturan firebase authentication
    // Setelah user selesai registrasi, maka secara otomatis akan melakukan Sign In
    // sehingga kita bisa mengecek apakah seseorang sudah berhasil masuk atau belum

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);

    // Sebenarnya di dalam err dari Firebase ini (dalam bentuk Object)
    // ada 2 property yang penting:
    // - code: error code dari firebase authentication ketika terjadi error
    // - message: error message dari firebase authentication ketika terjadi error
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Fungsi untuk Login
// Kita gunakan versi async / await untuk memudahkan yah
const loginDenganEmailDanPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);

    // Sama dengan register
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
  // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

// Fungsi untuk sign out
const keluarDariApps = async () => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

// Export seluruh fungsi yang dibuat + auth
export {
  auth, // Nanti akan digunakan untuk hooks react-hooks-firebase
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPassword,
  keluarDariApps,
};