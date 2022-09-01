// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArDyJ4ESFDoBySeBptW6t2OnyGHBkVzaY",
  authDomain: "fabioflix-clone.firebaseapp.com",
  projectId: "fabioflix-clone",
  storageBucket: "fabioflix-clone.appspot.com",
  messagingSenderId: "542072987987",
  appId: "1:542072987987:web:95765a5a9dfe417bc9c1a6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
