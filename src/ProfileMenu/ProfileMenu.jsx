import "./ProfileMenu.css";
import React from "react";

function template() {
  return (
    <div className="profile-menu red">

		<div className="circular f1" onClick={this.showMenu} >
			<img src="https://i.pinimg.com/236x/e4/cf/16/e4cf164b7139de40ec72aca74a0b7887--leo-star-spirit-animal.jpg" alt="" className="circle right"/>
		</div>

		<div className="customMenu hide">
			
			<div className="blank f1" onClick={this.close}><span className="close">&times;</span></div>
			<div onClick={this.props.signOut} className="f1"><i className="material-icons">power_off</i>Sign Out</div>
		</div>
		
		
		
    </div>
  );
};

export default template;
