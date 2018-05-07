 import * as firebase from 'firebase';

 var config = {
  apiKey: "AIzaSyDH2nrDlZqBLfKuyLNdvR7thVqQ9ZCwUG0",
  authDomain: "pashav2-eef6b.firebaseapp.com",
  databaseURL: "https://pashav2-eef6b.firebaseio.com",
  projectId: "pashav2-eef6b",
  storageBucket: "pashav2-eef6b.appspot.com",
  messagingSenderId: "1057047902110"
};

  firebase.initializeApp(config);

  export const database = firebase.database().ref('/');
  export const productos = firebase.database().ref('Productos/');
  export const featuredProductos = firebase.database().ref('Productos/');
  // export const addProducto = firebase.child("Productos");

