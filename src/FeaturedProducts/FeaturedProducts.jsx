import "./FeaturedProducts.css";
import React from "react";
import LazyImage from "../LazyImage/LazyImage";
import FancyButton from "../FancyButton/FancyButton";

function template() {
  
  return (
    <div className="featured-products">
    {/* <div>
    <video muted autoPlay className="objetFit" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FPasha.mp4?alt=media&token=573b7806-0508-4618-beea-9f79993f954b"></video>
    </div> */}
    
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
                
                  <span> <h1>{producto.categoria}-{producto.subcategoria}</h1></span>
                </div>
                </div>
                <br/>
                <FancyButton type={12} desc="MORE INFO"></FancyButton>
              </footer>
            </div>
          )
        })
      }
    </div>
  );
};

export default template;
