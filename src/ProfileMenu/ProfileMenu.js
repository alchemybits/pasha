import React    from "react";
import template from "./ProfileMenu.jsx";

class ProfileMenu extends React.Component {
	close(){
		const menu = document.querySelector(".customMenu");
		menu.classList.add("hide");
		menu.classList.remove("show");
	}

	showMenu(){
		const menu = document.querySelector(".customMenu");
		menu.classList.add("show");
		menu.classList.remove("hide");
		console.log(menu);
	}
	componentDidMount(){
		
		
	}

  render() {
    return template.call(this);
  }
}

export default ProfileMenu;
