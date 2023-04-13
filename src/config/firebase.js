
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAODn9ushlS4lDKjc488w66oM76dTNWpV8",
  authDomain: "tik-tok---jornada.firebaseapp.com",
  projectId: "tik-tok---jornada",
  storageBucket: "tik-tok---jornada.appspot.com",
  messagingSenderId: "83160678615",
  appId: "1:83160678615:web:fd76ffae283e1ea44b7092"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;