import "./FeaturedProducts.css";
import React from "react";
import LazyImage from "../LazyImage/LazyImage";
import FancyButton from "../FancyButton/FancyButton";

function template() {
  
  return (
    <div className="featured-products">
      {
        
        (Object.values(this.props.productos)).map((producto,key) => {
         if(!producto.url){
           return ("");
         }

         let add = "";

        if(key%2)
          add = "right";
        else 
          add = "";

          return(
          
          <div className={"product "+add} key={key}>
              <LazyImage unloadedSrc="../assets/images/clear.png" src={producto.url} ></ LazyImage>
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
