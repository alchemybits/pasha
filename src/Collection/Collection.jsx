import "./Collection.css";
import React from "react";

import LazyImage from "../LazyImage/LazyImage";
import FancyButton from "../FancyButton/FancyButton";

function template() {
  return (
    <div className="collection">
    <div className="tree">
    <div class="treeview hover">
      <ul>
        <li className="mainLi" onClick={() => { this.goTo("/Collection")}}><span>Show all</span></li>
        <li className="mainLi">
          <input type="checkbox" defaultChecked id="cb-1" />
          <label for="cb-1">
            <span>Flats</span>
          </label>
          <ul>
            <li onClick={() => { this.goTo("/Collection/Flats")}}><span>All Flats</span></li>
            <li onClick={() => { this.goTo("/Collection/Flats/Thong")}}><span>Thong</span></li>
            <li onClick={() => { this.goTo("/Collection/Flats/Sling Back")}}><span>Sling Back</span></li>
            <li onClick={() => { this.goTo("/Collection/Flats/Ankle Strap")}}><span>Ankle Strap</span></li>
          </ul>
        </li>
        <li className="mainLi">
          <input type="checkbox" defaultChecked id="cb-2" />
          <label for="cb-2">
            <span>Wedges</span>
          </label>
          <ul>
            <li onClick={() => { this.goTo("/Collection/Wedges")}}><span>All Wedges</span></li>
            <li onClick={() => { this.goTo("/Collection/Wedges/Thong")}}><span>Thong</span></li>
            <li onClick={() => { this.goTo("/Collection/Wedges/Sling Back")}}><span>Sling Back</span></li>
            <li onClick={() => { this.goTo("/Collection/Wedges/Ankle Strap")}}><span>Ankle Strap</span></li>
          </ul>
        </li>
        <li className="mainLi">
          <input type="checkbox" defaultChecked id="cb-3" />
          <label for="cb-3">
            <span>Heels</span>
          </label>
          <ul>
            <li onClick={() => { this.goTo("/Collection/Heels")}}><span>All Heels</span></li>
            <li onClick={() => { this.goTo("/Collection/Heels/Ankle Strap")}}><span>Ankle Strap</span></li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
    <div class="searchbar">
      <form onSubmit={this.searchQuery.bind(this)}>
        <input type="text" className="closesearch" id="searchbar-input"  />
      </form>
      <i class="fa fa-search " id="searchbar-icon" aria-hidden="true" onClick={this.search}></i>
      {/* <i class="fa fa-times" id="searchbar-cross" aria-hidden="true"></i> */}
    </div>
       {
        
        (Object.values(this.props.productos)).map((producto,key) => {
         if(!producto.url){
           return ("");
         }

         if(producto.sorry)
          return (<h1>{producto.sorry}</h1>);

         let add = "";

        if(key%2)
          add = "right";
        else 
          add = "";

          return(
          
          <div className={"product "+add} key={key}>
              {/* <LazyImage unloadedSrc="../assets/images/clear.png" src={producto.url} ></ LazyImage> */}
              <img src={producto.url} alt=""/>
              <footer>
                <div className="tittle">
                  {
                   producto.nombre.charAt(0).toUpperCase() + producto.nombre.slice(1)
                  }
                </div>
                <div className="prodDescription">
                  {producto.desc}
                </div>
                <div className="price">
                <div className="header">
                <span>$ </span>{producto.precio}
                  <span> <h1>{producto.categoria}-{producto.subcategoria}</h1></span>
                </div>
                </div>
                
                
                <br/>
                <FancyButton type={12} desc="ADD TO CART"></FancyButton>
              </footer>
            </div>
          )
        })
      }
    </div>
  );
};

export default template;
