import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC_jG5GuJyXUmbltTeeVKJqe1DDL6V8ttQ",
  authDomain: "react-portfolio-602b5.firebaseapp.com",
  projectId: "react-portfolio-602b5",
  storageBucket: "react-portfolio-602b5.appspot.com",
  messagingSenderId: "827899437322",
  appId: "1:827899437322:web:f1a73c20c01ce8a6229af3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();