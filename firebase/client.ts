import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDO4bZCIYD6FuYl7VzgSf2eoPB3vPxEBH0",
  authDomain: "prepwise-f67f2.firebaseapp.com",
  projectId: "prepwise-f67f2",
  storageBucket: "prepwise-f67f2.firebasestorage.app",
  messagingSenderId: "257826268196",
  appId: "1:257826268196:web:d731432bdc2f1d098424b1",
  measurementId: "G-EVF7V4T2FT"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);