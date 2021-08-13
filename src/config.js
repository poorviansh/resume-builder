import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
let fbObj = {
    apiKey: "AIzaSyAUH73_7vo23UOCee6vP3ATfW8teQfoZ9Q",
    authDomain: "resume-builder-ea22f.firebaseapp.com",
    databaseURL: "https://resume-builder-ea22f-default-rtdb.firebaseio.com",
    projectId: "resume-builder-ea22f",
    storageBucket: "resume-builder-ea22f.appspot.com",
    messagingSenderId: "632042874106",
    appId: "1:632042874106:web:534c11ec951fd29a029543",
}
firebase.initializeApp(fbObj);
export default firebase;
