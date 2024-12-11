// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "mernlms.firebaseapp.com",
  projectId: "mernlms",
  storageBucket: "mernlms.firebasestorage.app",
  messagingSenderId: "856884056379",
  appId: "1:856884056379:web:d6d989798dd72b465da71e",
  measurementId: "G-L8XX3TYZ1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);