import React    from "react";
import M    from "materialize-css";
import template from "./ProfileMenu.jsx";

class ProfileMenu extends React.Component {

	componentDidMount(){
		var elem = document.querySelector('.dropdown-trigger');
  		var instance = M.Dropdown.init(elem);
	}

  render() {
    return template.call(this);
  }
}

export default ProfileMenu;
