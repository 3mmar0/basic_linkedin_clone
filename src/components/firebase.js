import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDV1X6WwYMPhdAR3bVx7gePl5_MwALf8Gc",
  authDomain: "linkedin-react-fb.firebaseapp.com",
  projectId: "linkedin-react-fb",
  storageBucket: "linkedin-react-fb.appspot.com",
  messagingSenderId: "317832266034",
  appId: "1:317832266034:web:1c3905c0fca3da126d972b",
  measurementId: "G-1N3ECFM96Y"
});


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;