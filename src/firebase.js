// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTf1u-uKan7lyCm1_p55ZZ299AYHEzxIE",
  authDomain: "todo-681af.firebaseapp.com",
  projectId: "todo-681af",
  storageBucket: "todo-681af.appspot.com",
  messagingSenderId: "1064699348336",
  appId: "1:1064699348336:web:25e7ca03a7a5da44663bb5",
  measurementId: "G-T7W3KQ6WNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db= getFirestore(app);
export {db}