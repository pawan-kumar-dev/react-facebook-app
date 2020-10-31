import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAT_rkGglUSKUgwZC3emo8SGx7SWxst8G4",
  authDomain: "react-facebook-clone-a3977.firebaseapp.com",
  databaseURL: "https://react-facebook-clone-a3977.firebaseio.com",
  projectId: "react-facebook-clone-a3977",
  storageBucket: "react-facebook-clone-a3977.appspot.com",
  messagingSenderId: "1017536230470",
  appId: "1:1017536230470:web:faa5a76c82cd1e83ce0647"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;
