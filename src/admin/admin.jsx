import "./admin.css";
import React from "react";
import {Logo} from "../logo/logo";

function template() {
  return (
    <div className="admin">
    <div className="logoAbsolute">
    <Logo iconWidth="200" iconHeight="90" fontSize="20"></Logo>
    </div>
    <main class="container">
      <form action="" method="post" className="admin" onSubmit={this.newProduct}>
        <fieldset>
          <legend><span>1</span>Basic Info</legend>
          <label for="name" className="admin">Name</label>
          <input type="text" className="admin" id="name" name="user_name" placeholder="Pasha" ref={el => this.nombre = el} onChange={this.check}/>
          <label for="name" className="admin">Price</label>
          <input type="text" id="price" className="admin" name="user_name" placeholder="Price" ref={el => this.precio = el} onChange={this.check}/>
          <label for="bio" className="admin">Description</label>
          <textarea id="desc" name="user_bio" placeholder="Write a brief description..." ref={el => this.description = el} onChange={this.check}></textarea>
        </fieldset>

        <fieldset>
          <legend><span>3</span>Image</legend>
          <label for="pic" className="admin">Product</label><br/>
          <input id="pic" className="fileButton" type="file" onChange={(event) => {this.change(event); this.check();}}/>
          <div className="flex progressContainer">
            <p id="size" className="f3">0</p>
            <div className="f10">
              <progress id="progressBar" value="0" max="100"></progress>
            </div>
          </div>
          {/* <div className="done">
            <h4 className="green-text">UPLOAD SUCCESFUL!</h4>
          </div> */}
          


        </fieldset>
        <button id="my-input-id" disabled type="submit">Upload</button>
      </form>
    </main>

    <div class="toast jam" aria-hidden="true">
      <span class="close" aria-role="button" tabindex="0" onClick={this.close}>&times;</span>
      UPLOAD SUCCESFUL!
    </div>
      
    </div>
  );
};

export default template;