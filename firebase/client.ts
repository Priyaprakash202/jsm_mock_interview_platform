import { initializeApp , getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCS5-QyaARlMZKBIGcgeOq1SdSWJxF_yQ8",
  authDomain: "prepeasy-7cb03.firebaseapp.com",
  projectId: "prepeasy-7cb03",
  storageBucket: "prepeasy-7cb03.firebasestorage.app",
  messagingSenderId: "1069269305765",
  appId: "1:1069269305765:web:938238a0f9f9ad2bbd404c",
  measurementId: "G-HF7V1M2SGC"
};


const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();
 export const auth = getAuth(app);
 export const db = getFirestore(app)