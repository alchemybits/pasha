 import * as firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyCUa8tU5cQzFWJvJ9rnI_9LYJ-zLB2Z4mY",
    authDomain: "pasha-edb8f.firebaseapp.com",
    databaseURL: "https://pasha-edb8f.firebaseio.com",
    projectId: "pasha-edb8f",
    storageBucket: "pasha-edb8f.appspot.com",
    messagingSenderId: "524937301785"
  };

  firebase.initializeApp(config);

  export const database = firebase.database().ref('/');
  export const productos = firebase.database().ref('Productos/');
  // export const addProducto = firebase.child("Productos");

