import "./admin.css";
import React from "react";
import {LogoB} from "../logo/logo";

function template() {
  return (
    <div className="admin">
      
      <div className="f1 ">
      <LogoB noclick></LogoB>
      </div>
      <div className="f1 ">
      <form className="form f1" onSubmit={this.newProduct}>
      <div className="flex">
      <div className="input-field f1">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" ref={el => this.nombre = el}/>
          <label htmlFor="icon_prefix">Nombre Producto</label>
        </div>
        <div className="input-field f1">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" ref={el => this.precio = el}/>
          <label htmlFor="icon_prefix">Precio</label>
        </div>
      </div>
      
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" ref={el => this.description = el}/>
          <label htmlFor="icon_prefix">Descripcion</label>
        </div>
        <div className="flex">
          
          
            <input className="fileButton" type="file" onChange={this.change}/>
          
        </div>
        <br/>
        <div className="flex">
        <div className="f10"></div>
        <button className="waves-effect f4 waves-light btn black" type="submit"><i className="material-icons left">send</i>Sumbit</button>
        </div>
        
      </form>
      
      </div>
      
    </div>
  );
};

export default template;