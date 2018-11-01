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
      
      <FeaturedProducts ></FeaturedProducts> 
      
    </div>
  );
};

export default template;
