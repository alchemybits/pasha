import React    from "react";
import template from "./admin.jsx";
import { productos } from '../Firebase';

import * as firebase from 'firebase';

class admin extends React.Component {
  constructor(props) {
    super(props);
    
    this.change = this.change.bind(this);
    this.newProduct = this.newProduct.bind(this);
    
  }

  change(e){
    

    this.file = e.target.files[0];
    console.log("====change===",this.file);

   
    
  }

  newProduct(event){
    event.preventDefault();
    // console.log(this.file );
    const NAME = this.nombre.value;
    const PRICE = this.precio.value;
    const DESC = this.description.value;

    const wrap = document.querySelector(".file-upload-wrapper");
    console.log("wrap");
    wrap.setAttribute('data-text',  this.file.name.replace(/.*(\/|\\)/, ''));

    let storageRef = firebase.storage().ref('productos/' + this.file.name);

    let task = storageRef.put(this.file);

   

    task.on('state_changed',
      function progress(snapshot) {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log( "PERCENT", snapshot);
      },
      function error(err){
        console.log("ERRRORRRR UPLOADING");
      },
      function complete(pic){
        productos.push({
          nombre: NAME,
          precio: PRICE,
          desc: DESC,
          url: task.snapshot.downloadURL
        });
      }
    )

    

  }

  render() {
    return template.call(this);
  }
}

export default admin;
