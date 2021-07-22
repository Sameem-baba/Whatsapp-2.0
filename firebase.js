import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnfGp-yahSvxBlnqVY87duzInNZ_DWjKc",
    authDomain: "whatsapp-e3a91.firebaseapp.com",
    projectId: "whatsapp-e3a91",
    storageBucket: "whatsapp-e3a91.appspot.com",
    messagingSenderId: "74922464891",
    appId: "1:74922464891:web:60ea0bb4d6f89c17a1f4de",
    measurementId: "G-9JBTDCB25E"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
