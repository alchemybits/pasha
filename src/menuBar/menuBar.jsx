import "./menuBar.css";
import React from "react";
import { Logo } from "../logo/logo";
import ProfileMenu from "../ProfileMenu/ProfileMenu";



function guest(){
	return (
		<div className="">
			<b className="simple"><a href="/login">Log in </a> | <a href="/login/register"> Register</a></b>
		</div>
	)
}

function logout(func){
	return (
		<div className="">
			<b className="simple" onClick={func}>Log Out	</b>
			<div className="right">
				<span><i className="material-icons">shopping_cart</i></span>
				<span><i className="material-icons">search</i></span>
			</div>
		</div>
	)
}

function template() {
  return (
    <div className="menu-bar">
		<Logo iconWidth="200" iconHeight="90" fontSize="20" className="f2 "></Logo>
    	<div className="extended">
			<div className="logWrapper">{this.props.islogged ? logout(this.props.signOut) : guest()}</div>
	      <ul className="snip1189 f20">
					<li id="home" className=""><a href="/">HOME</a></li>
					<li id="aboutus"><a href="/aboutus">ABOUT US</a></li>
					<li id="collection"><a href="/Collection">COLLECTION</a></li>
					<li id="newarrival"><a href="/newarrival">NEW ARRIVAL</a></li>
					<li id="instock"><a href="/instock">IN STOCK</a></li>
					{/* <li><a href="">B2B</a></li> */}
					<li id="contactus"><a href="/contactus">CONTACT US</a></li>

					
				</ul>
			
			
    	</div>
		<div className="short">
		<div class="menu-wrapper" onClick={this.menuToggle}>
			<div class="hamburger-menu" ></div>	  
		</div>
		<div className="shortMenu close">
		<ul className="snip1189 f20 leftMenu">
				<li id="home" className=""><a href="/">Home</a></li>
				<li id="aboutus"><a href="/aboutus">ABOUT US</a></li>
				<li id="collection"><a href="/Collection">COLLECTION</a></li>
				<li id="newarrival"><a href="/newarrival">NEW ARRIVAL</a></li>
				<li id="instock"><a href="/instock">IN STOCK</a></li>
				
				<li id="contactus"><a href="/contactus">CONTACT US</a></li>
			</ul>
		</div>
			
		</div>


		  
		
    </div>
  );
};

export default template;
