// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoJTaCKoIfPnM3Uqu9w-cCd39caFZlqhU",
  authDomain: "restaurants---app.firebaseapp.com",
  projectId: "restaurants---app",
  storageBucket: "restaurants---app.appspot.com",
  messagingSenderId: "63208714457",
  appId: "1:63208714457:web:0bfe177a85cd882720cec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);

export{
    FirebaseFirestore
}