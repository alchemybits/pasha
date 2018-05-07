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
        <LazyImage unloadedSrc="../assets/images/clear.png" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FBloko.jpg?alt=media&token=7250d094-1a9c-47a4-aa9e-294e768a96f2" ></ LazyImage>
      
      </div>
      <FeaturedProducts ></FeaturedProducts> 
      
    </div>
  );
};

export default template;
