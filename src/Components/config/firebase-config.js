import { initializeApp } from "firebase/app";
import {getDatabase} from "@firebase/database"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBfwiQqAlAYdtF-gWjWak3YE0c4fMF808M",
  authDomain: "whatsapp-clone-90caf.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-90caf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsapp-clone-90caf",
  storageBucket: "whatsapp-clone-90caf.appspot.com",
  messagingSenderId: "124571135226",
  appId: "1:124571135226:web:60e59db9c955f939d0ad43",
  measurementId: "G-ZXSNWFM5SS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const auth = getAuth(app);

export {db, auth};