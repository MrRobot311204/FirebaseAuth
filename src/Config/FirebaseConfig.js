// Configure your Firebase app first then import getAuth from firebase/auth
// export your getAuth(app) using const database

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"; // for image uploading and stuff

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2rAHBQHJPbiXOx4qoCl5cRg1zHzHBqVw",
  authDomain: "fir-practice-30-03-24.firebaseapp.com",
  projectId: "fir-practice-30-03-24",
  storageBucket: "fir-practice-30-03-24.appspot.com",
  messagingSenderId: "714978296362",
  appId: "1:714978296362:web:88940b8d4aae654be1f953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const imageDb = getStorage(app);