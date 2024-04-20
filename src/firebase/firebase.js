
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBwkJJnYqr1iYgIYOhMar4OgmcB74vpHSA",
  authDomain: "insta-reimagined.firebaseapp.com",
  projectId: "insta-reimagined",
  storageBucket: "insta-reimagined.appspot.com",
  messagingSenderId: "879826348167",
  appId: "1:879826348167:web:c371124b7daebb0d7d3022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage};