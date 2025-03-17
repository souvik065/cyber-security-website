import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlDySXX3aKygEdRGXZvFRWsMQeHyO_fTg",
  authDomain: "crew-cybersecurity-website-1.firebaseapp.com",
  projectId: "crew-cybersecurity-website-1",
  storageBucket: "crew-cybersecurity-website-1.firebasestorage.app",
  messagingSenderId: "846350090329",
  appId: "1:846350090329:web:a69a2fa723f771720df148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);


console.log('Firebase Project ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID);

export { db, collection, addDoc};