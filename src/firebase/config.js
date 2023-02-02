import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBd5QIZ4YXyJCUYQUP7bzkTmrA3tFQYAGU",
  authDomain: "miniblog-5897a.firebaseapp.com",
  projectId: "miniblog-5897a",
  storageBucket: "miniblog-5897a.appspot.com",
  messagingSenderId: "904061195917",
  appId: "1:904061195917:web:81d6c3358422d935acb4c4",
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};