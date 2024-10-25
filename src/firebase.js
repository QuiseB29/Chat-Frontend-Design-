// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxKr0lCsz5QgHcjj5RtWNjZFkVjVwVFMg",
  authDomain: "chat-c3874.firebaseapp.com",
  projectId: "chat-c3874",
  storageBucket: "chat-c3874.appspot.com",
  messagingSenderId: "105806337051",
  appId: "1:105806337051:web:9d91cbaa0ff4dc4e4894be",
  measurementId: "G-7MZJPTZ2D8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore()