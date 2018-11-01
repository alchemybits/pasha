import React    from "react";
import M    from "materialize-css";
import template from "./menuBar.jsx";
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert2'


import { getCartById } from '../Actions/Actions';
import { connect } from 'react-redux';

import { database } from '../Firebase';
import * as firebase from 'firebase';


function mapStateToProps(state) {
	//console.log("state in props from HOME =>",state);
  return {
		cart: state.cart,
		
  };
}


class menuBar extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			cart: "",
			firstCheck: false
		}

		this.user = firebase.auth().currentUser;
		this.scrollTrack = this.scrollTrack.bind(this);
		this.closeCart = this.closeCart.bind(this);
	}

	moreItem(items,index){
		console.log("YEP");
		items[index].cant ++;
		localStorage.setItem("cart", JSON.stringify(items));

	}

	closeCart(){
		// console.log("testTTTTT");
		document.getElementById("cart").classList.toggle("closed");
	}

	openGuestCart(){
		document.getElementById("cart").classList.toggle("open");
	}

	scrollTrack(e){
		//body tag must have a on scroll event onscroll="scrollTrack()"
		var elmnt = document.getElementsByTagName("body")[0];
		if(elmnt)
			var y = elmnt.scrollTop;

		console.log("&&&&&&&&&&&&&&&&&&",y);
	}

	menuToggle(e){
		document.querySelector(".hamburger-menu").classList.toggle("animate");
		document.querySelector(".shortMenu").classList.toggle("open");
		document.querySelector(".shortMenu").classList.toggle("close");
	}

	componentDidMount(){
		var elmnt = document.getElementsByTagName("body")[0];
		elmnt.addEventListener('scroll', this.scrollTrack);

		var elem = document.querySelector('.dropdown-trigger');
		
		var instance = M.Dropdown.init(elem);

	}

	removeCurrent(){
		document.getElementById("aboutus").classList.remove("current");
		document.getElementById("collection").classList.remove("current");
		document.getElementById("newarrival").classList.remove("current");
		// document.getElementById("instock").classList.remove("current");
		document.getElementById("contactus").classList.remove("current");
		document.getElementById("home").classList.remove("current");
	}

	currentTab(currentTab){
		this.removeCurrent();

		switch(currentTab){
			case "/aboutus" : document.getElementById("aboutus").classList.add("current"); break;
			case "/collection" : document.getElementById("collection").classList.add("current"); break;
			case "/newarrival" : document.getElementById("newarrival").classList.add("current"); break;
			// case "/instock" : document.getElementById("instock").classList.add("current"); break;
			case "/contactus" : document.getElementById("contactus").classList.add("current"); break;
			default :
				document.getElementById("home").classList.add("current");
				
		
		}

	}

	componentWillReceiveProps(nxtProp){
		let currentTab =  nxtProp.history.location.pathname;
			currentTab = currentTab.toLowerCase();


		


		this.currentTab(currentTab);

		if(nxtProp.cart){
			if(this.user){
				
				if(!this.state.firstCheck){
					//multiple items HERE << missing a each for multiple items.
					if (typeof localStorage["cart"] !== "undefined" && localStorage["cart"] !== "undefined")
					swal({
						title: 'Would you like to merge carts?',
						text: "We detected there is a guest cart would you like to merge it with your personal cart?",
						type: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, merge it!'
					}).then((result) => {
						if (result.value) {
							
							// {
							// 	//wait
							// }
							let items = JSON.parse(localStorage.getItem('cart'));
							items.map( item => {
								
								this.props.addItem(item);
							})	
							
							localStorage.removeItem("cart");
							

							
						swal(
							'Merged!',
							'Both carts were merged.',
							'success'
						)
						}
					})
					// se chekea si hay local. si local xiste preguntar si quiere unir local con cart del usuario.
					//borrar local.
					// hacer operaciones de agregar y quitar con carrito de FB, si el usuario esta logeado.
					
					this.setState({firstCheck:true});
				}
			}
			 
		}
		else 
			database.child("Carts").child(this.user.uid).update({
				cart: ""
			})
		
		
	}

	componentWillMount(){
		
		if(this.user)
			this.props.getCartById(this.user.uid);
	}



  render() {
	  const isLoggedIn = this.props.islogged;
	  return template.call(this);
  }
}

export default withRouter(connect(mapStateToProps,{ getCartById })(menuBar));
