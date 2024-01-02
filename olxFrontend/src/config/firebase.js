
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDNKn39v0SDJdIOO4zm_PoVS-HZYJTKUwU",
  authDomain: "olx-clone-726f5.firebaseapp.com",
  projectId: "olx-clone-726f5",
  storageBucket: "olx-clone-726f5.appspot.com",
  messagingSenderId: "848430812305",
  appId: "1:848430812305:web:3dd29c30b505715f758330",
  measurementId: "G-K9J7PL5LNH"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(db)