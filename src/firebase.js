// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDoCRV28l57lZFAjMZGcbTL6LRQWgUPsVM",
    authDomain: "latihan-firebase-login.firebaseapp.com",
    projectId: "latihan-firebase-login",
    storageBucket: "latihan-firebase-login.appspot.com",
    messagingSenderId: "807677825920",
    appId: "1:807677825920:web:9a438ae2d953d8a04e6765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

