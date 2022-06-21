import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/storage";

//Inladen firebase database
const firebaseConfig = {
  apiKey:"AIzaSyCGCul_6FPuBcx5S59JUMcIU1ARkpk7jCw",   
  authDomain:"glow-fe1d7.firebaseapp.com",   
  projectId:"glow-fe1d7",   
  storageBucket:"glow-fe1d7.appspot.com",   
  messagingSenderId:"535519904024",  
   appId:"1:535519904024:web:99b83979509772ac83de6d"
  
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
