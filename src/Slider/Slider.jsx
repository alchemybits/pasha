import "./Slider.css";
import React from "react";
import { LogoB } from "../logo/logo";

function template() {
  return (
    <div className="slider">
      <div className="slideswrap">
        <div className="slide slide1 active">
          <div className="imgwrapper">
            {/* <img src="https://lh3.googleusercontent.com/96pZSYGYdgFtrLlOtEv3C9jP1M9AFr1jXe-iZQfomIaEK74veviQ8glP3re5TB7arAoCvVgKCsTOhzUFi4MfeBUNx1HAy10F1pym0IYlxYbgZSxzfgGBLa_9GBaTqM2sVFqxaMrDfv8pCjaZNWdq0tYbcs0QpSMAJ2WwChl8ewHHohOVxsHq-V9E669Tq16M0CbE1b3FrU9IeoV8AhBwFGjc8AxBpyrVact6oshEZT75-FA5QAK3pBOsBxS6P6xGIJkEfNCNFhjjHk1ZVyDShvu156U0CAmjfEOfYpzdZ5c1Tcou2EKmjpjd2D2zGK1JJOfKXEAfPxmXKy2xPxOW-a8Jgk2UvurlKm-cEIkxlR4RXNd--55-4JaMMh5XuVvoZotjtw1Xql_00GJ9XslhHODScR_P6YS7TSTDdqhNiNofaNxxnDvklXGRtPVn1I82JpcIILvkte7rlYg_zHZ8wHT2obszzhcofUszmYmtEAtRCayKqbovJobMIrTL81UCEh9-zFOBV96iQEC_1lE-tap52KB4xaRfefdbdf3MIYZBzUztrExqWKKlB5B6H_F0rwGKCUlROFqVJs5g1wAj7OYRyxGXmt4KwisXDQ=w459-h220-no" alt="" className="f1 logoInit" /> */}
            <LogoB className="logoInit" noclick iconWidth="170" iconHeight="200" ></LogoB>
          </div>	
        
        </div>
        <div className="slide slide2 sale hide">
          <div className="flex hundred">
          {/* <img className="slideimg f1" src="/assets/images/SILVER SALE-02.jpg" alt=""/>
           */}
            <div className=" f1">
              <img className="slideimg" src="/assets/images/SILVER SALE-02.jpg" alt=""/>
            </div>
            <div className="f1">
              <div className="imgDescription f1">
                <h2>NOW ON</h2>
                <h1 className="text-gold">SALE</h1>
              </div>
            </div>
          </div>
          
          
        </div>
        {/* <div className="slide slide2 hide">
          <img  className="slideimg" src="/assets/images/Chira.jpg" alt=""/>
          <div className="imgDescription">
            <b>Chira</b>
            <p>description</p>
          </div>
        </div>  */}
      </div>
      <div className="navigationBar">
        <div className="f5"></div>
        <i className="material-icons growOnHover" onClick={this.goUp}>arrow_upward</i>
        <i className="material-icons">remove</i>
        <i className="material-icons growOnHover"  onClick={this.goDown}>arrow_downward</i>
        <div className="f5"></div>
      </div>
	
    </div>
  );
};

export default template;
