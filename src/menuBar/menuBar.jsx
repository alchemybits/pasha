import "./menuBar.css";
import React from "react";
import Logo from "../logo/logo";
import ProfileMenu from "../ProfileMenu/ProfileMenu";



function guest(){
	return (
		<div className="">
			<b>new to pasha? <a href="/login">Log in</a> or <a href="/login/register">Register</a></b>
		</div>
	)
}

function template() {
  return (
    <div className="menu-bar">
    	<Logo iconWidth="100" iconHeight="50" fontSize="20" className="f1"></Logo>
			
    	<div className="bar f1"></div>
      <ul className="snip1189 f20">
		  <li className="current"><a href="">HOME</a></li>
		  <li><a href="">ABOUT US</a></li>
		  <li><a href="">COLLECTION</a></li>
		  <li><a href="">NEW ARRIVAL</a></li>
		  <li><a href="">IN STOCK</a></li>
		  <li><a href="">B2B</a></li>
		  <li><a href="">CONTACT US</a></li>
		  
		</ul>
		
		{this.props.islogged ? <ProfileMenu signOut={this.props.signOut}></ProfileMenu> : guest()}

		  
		
    </div>
  );
};

export default template;
