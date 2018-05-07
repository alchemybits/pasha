import React    from "react";
import M    from "materialize-css";
import template from "./menuBar.jsx";
import { withRouter } from 'react-router-dom';

class menuBar extends React.Component {

	constructor(){
		super();
	}

	menuToggle(e){
		document.querySelector(".hamburger-menu").classList.toggle("animate");
		document.querySelector(".shortMenu").classList.toggle("open");
		document.querySelector(".shortMenu").classList.toggle("close");
	}

	componentDidMount(){
		var elem = document.querySelector('.dropdown-trigger');
			var instance = M.Dropdown.init(elem);

			let currentTab =  this.props.history.location.pathname;
			currentTab = currentTab.toLowerCase();
		switch(currentTab){
			case "/aboutus" : document.getElementById("aboutus").classList.add("current"); break;
			case "/collection" : document.getElementById("collection").classList.add("current"); break;
			case "/newarrival" : document.getElementById("newarrival").classList.add("current"); break;
			case "/instock" : document.getElementById("instock").classList.add("current"); break;
			case "/contactus" : document.getElementById("contactus").classList.add("current"); break;
			default :
				document.getElementById("home").classList.add("current");
				
		
		}
			
			//console.log("MENU BAR",this.props.islogged);
	}



  render() {
		const isLoggedIn = this.props.islogged;
		


    return template.call(this);
  }
}

export default withRouter(menuBar);
