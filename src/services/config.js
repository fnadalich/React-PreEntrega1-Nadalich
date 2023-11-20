
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fisher-shop.firebaseapp.com",
  projectId: "fisher-shop",
  storageBucket: "fisher-shop.appspot.com",
  messagingSenderId: "1095233376984",
  appId: "1:1095233376984:web:a2e9b4c1272688cbf53dad"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);