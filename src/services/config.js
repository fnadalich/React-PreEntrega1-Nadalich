
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCr_mUWbwWDl9CTc15RQy5c9CaID1HAKiI",
  authDomain: "fisher-shop.firebaseapp.com",
  projectId: "fisher-shop",
  storageBucket: "fisher-shop.appspot.com",
  messagingSenderId: "1095233376984",
  appId: "1:1095233376984:web:a2e9b4c1272688cbf53dad"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);