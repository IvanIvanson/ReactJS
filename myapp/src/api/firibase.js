import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB9mKSl9940meynPUoIF63dcmnIp_auYMI",
    authDomain: "gb-example-4e748.firebaseapp.com",
    databaseURL: "https://gb-example-4e748-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-example-4e748",
    storageBucket: "gb-example-4e748.appspot.com",
    messagingSenderId: "1030666510206",
    appId: "1:1030666510206:web:3957d9b864b10003041d2f",
    measurementId: "G-YVMLV9D7VS"
  };

export const firibase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firibase);
export const auth = getAuth(firibase);
export const database = getDatabase(firibase);