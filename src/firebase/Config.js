// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const  firebaseConfig = {
  apiKey: "AIzaSyD9UlWA_8HgpLf-NPRzFCXAwwDfaie-qGY",
  authDomain: "eshop-4796a.firebaseapp.com",
  projectId: "eshop-4796a",
  storageBucket: "eshop-4796a.appspot.com",
  messagingSenderId: "909412852380",
  appId: "1:909412852380:web:9266e697ecac11e6bd0359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

export default app;