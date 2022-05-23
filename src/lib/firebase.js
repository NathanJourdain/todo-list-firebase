import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZPUlv1SfXIceDEDLuogcdFgn2v0xG8mI",
  authDomain: "todolist-app-s.firebaseapp.com",
  projectId: "todolist-app-s",
  storageBucket: "todolist-app-s.appspot.com",
  messagingSenderId: "612039746277",
  appId: "1:612039746277:web:dc9274f9afe45b15902a0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
