// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnWyW5V8QFwtbnlS19wjEG9IOB_acmya0",
  authDomain: "chat-map-int.firebaseapp.com",
  projectId: "chat-map-int",
  storageBucket: "chat-map-int.appspot.com",
  messagingSenderId: "898036496390",
  appId: "1:898036496390:web:3a6ea508d5a4cd960aeb87",
  measurementId: "G-SVF500DL9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);