
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKF4GTzQMnFfCRWUJtbk0_vjiTkwtiX9g",
  authDomain: "bookshub-a2c95.firebaseapp.com",
  projectId: "bookshub-a2c95",
  storageBucket: "bookshub-a2c95.appspot.com",
  messagingSenderId: "405812404675",
  appId: "1:405812404675:web:a9e7f15163e09ada345d76",
  measurementId: "G-DHTXZ040TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};