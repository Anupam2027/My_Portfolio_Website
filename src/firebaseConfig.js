import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABcgo-FgGZGxoirTNP4h0gpABOYLMWgSs",
  authDomain: "portfolio-576a7.firebaseapp.com",
  projectId: "portfolio-576a7",
  storageBucket: "portfolio-576a7.firebasestorage.app",
  messagingSenderId: "124166191603",
  appId: "1:124166191603:web:00928eccd8fc5a5d937a86",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signInWithGoogle, logout, collection, addDoc, Timestamp };
