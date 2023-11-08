// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxC4QKSpG_tXwIIjtufwed3G7qRgWjTkA",
  authDomain: "share-plate-34323.firebaseapp.com",
  projectId: "share-plate-34323",
  storageBucket: "share-plate-34323.appspot.com",
  messagingSenderId: "66840972972",
  appId: "1:66840972972:web:e7a5c9a4d1fdf08ba5d909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth