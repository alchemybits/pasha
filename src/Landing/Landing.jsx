import "./Landing.css";
import React from "react";
import Slider from "../Slider/Slider";
import LazyImage from "../LazyImage/LazyImage";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

function template() {
  return (
    <div className="landing">
      {/* <Slider></Slider>
			<div className="box font left-text">
				<h4 >/ FEATURED PRODUCTS .</h4>
			</div>	
			
      <Products ></Products> */}
      <div className="frontImage">
      {/* https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2F3.jpg?alt=media&token=696888a2-4a74-4ac1-a3fa-872076c33730 */}
      {/* https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FBloko.jpg?alt=media&token=7250d094-1a9c-47a4-aa9e-294e768a96f2 */}
        <LazyImage className="objetFit" unloadedSrc="../assets/images/clear.png" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FBloko.jpg?alt=media&token=7250d094-1a9c-47a4-aa9e-294e768a96f2" ></ LazyImage>
        {/* <video muted autoPlay bucle className="objetFit" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FPasha.mp4?alt=media&token=573b7806-0508-4618-beea-9f79993f954b"></video> */}
      
      </div>
      <FeaturedProducts ></FeaturedProducts> 
      
    </div>
  );
};

export default template;
