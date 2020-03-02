import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyBdpUgj_nFQdQXwp4tr86YKK1XOTdMO39I",
  authDomain: "firedux-todotest.firebaseapp.com",
  databaseURL: "https://firedux-todotest.firebaseio.com",
  projectId: "firedux-todotest",
  storageBucket: "firedux-todotest.appspot.com",
  messagingSenderId: "601308518404",
  appId: "1:601308518404:web:11de844d01c3a76291bd51",
  measurementId: "G-PEK3FN2226"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
firebase.analytics();
export const todosRef = databaseRef.child("todos");
