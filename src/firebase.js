import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2y0rTAivJ14_54hi9KpgpZWDfrImtDBk",
    authDomain: "linkedin-clone-9ec95.firebaseapp.com",
    projectId: "linkedin-clone-9ec95",
    storageBucket: "linkedin-clone-9ec95.appspot.com",
    messagingSenderId: "1056751586286",
    appId: "1:1056751586286:web:ad81ee3f25163779a15cff",
    measurementId: "G-DLFY1KBPJE"
};
 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;