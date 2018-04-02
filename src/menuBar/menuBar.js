import React    from "react";
import M    from "materialize-css";
import template from "./menuBar.jsx";

class menuBar extends React.Component {

	constructor(){
		super();
	}

	componentDidMount(){
		var elem = document.querySelector('.dropdown-trigger');
  		var instance = M.Dropdown.init(elem);
  		console.log("props in menubar",this.props.islogged);
	}

  render() {
		const isLoggedIn = this.props.islogged;
		console.log("=-=-=-=-=-=-=-=-=-=-= : ",isLoggedIn);

    return template.call(this);
  }
}

export default menuBar;
