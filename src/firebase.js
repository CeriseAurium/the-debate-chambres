// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcOwYvEbB_1JBlystqyD22cqPktfdqEpU",
  authDomain: "tsdp-intrams-website.firebaseapp.com",
  databaseURL: "https://tsdp-intrams-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tsdp-intrams-website",
  storageBucket: "tsdp-intrams-website.appspot.com",
  messagingSenderId: "208367541957",
  appId: "1:208367541957:web:96c1406d90872c19efdaac",
  measurementId: "G-VV5XPL9F34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);