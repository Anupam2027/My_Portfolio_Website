import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABcgo-FgGZGxoirTNP4h0gpABOYLMWgSs",
  authDomain: "portfolio-576a7.firebaseapp.com",
  projectId: "portfolio-576a7",
  storageBucket: "portfolio-576a7.firebasestorage.app",
  messagingSenderId: "124166191603",
  appId: "1:124166191603:web:00928eccd8fc5a5d937a86",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
