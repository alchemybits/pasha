import "./Collection.css";
import React from "react";
import { Link } from "react-router-dom";

import LazyImage from "../LazyImage/LazyImage";
import FancyButton from "../FancyButton/FancyButton";

function template() {
  return (
    <div id="collection" className="collection">
    {/* <div className="tree">
    <div class="treeview hover">
      <ul>
        <li className="mainLi"><span><Link to="/Collection">Show all</Link></span></li>
        <li className="mainLi">
          <input type="checkbox" defaultChecked id="cb-1" />
          <label for="cb-1">
            <span>Flats</span>
          </label>
          <ul>
            <li ><span><Link to="/Collection/Flats">All Flats</Link></span></li>
            <li ><span><Link to="/Collection/Flats/Thong">Thong</Link></span></li>
            <li ><span><Link to="/Collection/Flats/Sling Back">Sling Back</Link></span></li>
            <li ><span><Link to="/Collection/Flats/Ankle Strap">Ankle Strap</Link></span></li>
          </ul>
        </li>
        <li className="mainLi">
          <input type="checkbox" defaultChecked id="cb-2" />
          <label for="cb-2">
            <span>Wedges</span>
          </label>
          <ul>
            <li><span><Link to="/Collection/Wedges">All Wedges</Link></span></li>
            <li><Link to="/Collection/Wedges/Thong">Thong</Link></li>
            <li><span><Link to="/Collection/Wedges/Sling Back">Sling Back</Link></span></li>
            <li><span><Link to="/Collection/Wedges/Ankle Strap">Ankle Strap</Link></span></li>
          </ul>
        </li>
        <li className="mainLi">
          <input type="checkbox" defaultChecked id="cb-3" />
          <label for="cb-3">
            <span>Heels</span>
          </label>
          <ul>
            <li><span><Link to="/Collection/Heels"> All Heels</Link></span></li>
            <li><span><Link to="/Collection/Heels/Ankle Strap">Ankle Strap</Link></span></li>
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
      <i class="fa fa-times" id="searchbar-cross" aria-hidden="true"></i>
    </div> */}
       {
        
        (Object.values(this.props.productos)).map((producto,key) => {
         if(!producto.url){
           return ("");
         }

         producto.tb = this.getThumbnail(producto.url);

         if(producto.sorry)
          return (<h1>{producto.sorry}</h1>);

         let add = "";

        if(key%2)
          add = "Reverse";
        else 
          add = "";

          return(
          
          // <div className={"Align product"+add} key={key}>
          <div className={"productC"} key={key}>
              {/* <LazyImage unloadedSrc="../assets/images/clear.png" src={producto.url} ></ LazyImage> */}
              <img src={producto.tb} alt=""/>
              <div className="titleC">
              <h1>
                  {
                   producto.nombre.charAt(0).toUpperCase() + producto.nombre.slice(1)
                  }
                  </h1>
              </div>
              <div className="priceC">
                <h4><span>HKD </span>{producto.precio}</h4>
              </div>
              <FancyButton class="buttonC" addItem={() => {this.props.addItem(producto)}} items={{nombre:producto.nombre.charAt(0).toUpperCase() + producto.nombre.slice(1),precio: producto.precio,url:producto.url}} type={13} desc="ADD TO CART"></FancyButton>
              
          </div>
          )
        })
      }
    </div>
  );
};

export default template;
