import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDHr5PqbBj5P9F19FCDN7qiqNoYggVCyDE",
    authDomain: "todolisttest-61f8b.firebaseapp.com",
    projectId: "todolisttest-61f8b",
    storageBucket: "todolisttest-61f8b.appspot.com",
    messagingSenderId: "640464615161",
    appId: "1:640464615161:web:a758e797b269a907365428",
    measurementId: "G-42KRVNN37K"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
