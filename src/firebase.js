import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDnbV6zeJ3DTZOWw827dt9h4ifGQIkO9a4",
    authDomain: "twitter-841fa.firebaseapp.com",
    projectId: "twitter-841fa",
    storageBucket: "twitter-841fa.appspot.com",
    messagingSenderId: "761629710139",
    appId: "1:761629710139:web:4569553843ced3a78a491e"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
