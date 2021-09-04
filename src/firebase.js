//import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAV8BLvH-2ejb74bpSJfGRbruSuQ6-SejA",

  authDomain: "todo-app-cp-e4025.firebaseapp.com",

  projectId: "todo-app-cp-e4025",

  storageBucket: "todo-app-cp-e4025.appspot.com",

  messagingSenderId: "44121978355",

  appId: "1:44121978355:web:2da59b5ffd98e85e87ce86",

  measurementId: "G-H1QK5VL60Z",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
