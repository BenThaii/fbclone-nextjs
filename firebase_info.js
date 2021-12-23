// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWl0fiZu5GClw317vsPds1RFm42jCKQ_o",
  authDomain: "facebook-clone-next-4ac3d.firebaseapp.com",
  projectId: "facebook-clone-next-4ac3d",
  storageBucket: "facebook-clone-next-4ac3d.appspot.com",
  messagingSenderId: "955942441335",
  appId: "1:955942441335:web:2807c79f185b1f62c1d172"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth();
const storage = getStorage(app);

export { auth, db, storage };
