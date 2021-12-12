import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpJDquj3tzrJkPCOZnQiI3cpr0JeWHMa4",
  authDomain: "linkedin-62edb.firebaseapp.com",
  projectId: "linkedin-62edb",
  storageBucket: "linkedin-62edb.appspot.com",
  messagingSenderId: "24673588267",
  appId: "1:24673588267:web:5f5129db9cd1ea3594866e",
  measurementId: "G-KRW8M7FPBM"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth, db};
