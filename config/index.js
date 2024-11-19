import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyASclvbhCaO3ZUvVs5ArklNzQ6oaIIP4MM",
    authDomain: "whatsappclone-6fed2.firebaseapp.com",
    databaseURL: "https://whatsappclone-6fed2-default-rtdb.firebaseio.com",
    projectId: "whatsappclone-6fed2",
    storageBucket: "whatsappclone-6fed2.firebasestorage.app",
    messagingSenderId: "928669361162",
    appId: "1:928669361162:web:6a9ea646125a466a30ebf3",
    measurementId: "G-227K2Q5JJR",
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

export default firebase;
