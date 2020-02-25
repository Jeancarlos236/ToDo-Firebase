import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyBdpUgj_nFQdQXwp4tr86YKK1XOTdMO39I",
  authDomain: "firedux-todotest.firebaseapp.com",
  databaseURL: "https://firedux-todotest.firebaseio.com",
  projectId: "firedux-todotest",
  storageBucket: "firedux-todotest.appspot.com",
  messagingSenderId: "601308518404",
  appId: "1:601308518404:web:380d38ac6926506691bd51",
  measurementId: "G-MJ6VSWEHZE"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
