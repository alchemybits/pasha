import React    from "react";
import * as firebase from 'firebase';
import {} from '../Firebase.js';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { Carts } from '../Firebase';
import LazyLoad from 'react-lazyload';
import PlaceholderComponent from "../PlaceholderComponent/PlaceholderComponent";



import "./Home.css";
import MenuBar from "../menuBar/menuBar";
import LazyImage from "../LazyImage/LazyImage";
import Collection from "../Collection/Collection";
import Landing from "../Landing/Landing";
import Aboutus from "../Aboutus/Aboutus";
import swal from "sweetalert2";

import { connect } from 'react-redux';

import { getProductos,getThumbnails,getUser,getCartById } from '../Actions/Actions';
import {reduxForm } from 'redux-form';

import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function mapStateToProps(state) {
	//console.log("state in props from HOME =>",state);
  return {
		productos: state.productos,
		thumbnails: state.thumbnails,
		user: state.user,
		cart: state.cart
  };
}


class Home extends React.Component {
	

	constructor(){
		super();

		let logged = false;

		this.state = {
			items: [],
			isBottom:false
		}

		this.user = firebase.auth().currentUser;
		this.increment = this.increment.bind(this);
		this.addItem = this.addItem.bind(this);
		this.minusItem = this.minusItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	increment() {
		this.props.dispatch({ type: 'INCREMENT' });
	}

	getThumbnail(s){
		
		let arre = [];
		let tbs = Object.values(this.props.thumbnails);
		let tbn = ""
		s = s.substring(0, s.indexOf('?'));
		var n = s.lastIndexOf('/');
		s = s.substring(n + 1);

		tbs.map(tb =>{
			if(tb.path.includes(s)){
				tbn = tb.thumbnail;
			}
			

		})

		return tbn;


	}
	containsObject(obj, list) {
		var i;

		
		for (i = 0; i < list.length; i++) {
			if (list[i].url === obj.url) {
				
				return {ans:true,index:i};
			}
		}

		
	
		return false;
	}

	addItem(newItem,flag = false){
		
		let newitems = [];

		if(!newItem) // if no items, return.
			return;
		
		newitems = this.state.items; // store state variable in local variable.
		newItem.tb = this.getThumbnail(newItem.url); //get thumbnail for item.
		
		if(!flag){//this will only be true if plus button on cart is being pushed.
			newItem.cant = 1; // add a cant variable to the item.
			newItem.total = parseInt(newItem.precio); // make sure price is a int and add it to total variable.
		}
		
		let index = 0; // not sure if necessary.
		let cart = []; // start with empty cart


		if(this.user){
			cart =  this.props.cart;// if user logged populate cart with FB's cart.
			//Carts.child(this.user.uid).push(newItem);
		}
		else{	
			console.log("its not logged ======");	
			if (typeof localStorage["cart"] !== "undefined" && localStorage["cart"] !== "undefined")//checks if there is a local cart.
				cart = [...JSON.parse(localStorage.cart)]; //if not logged populate with local cart.

			newitems = cart;
			


		}

		console.log("CART",cart);

		let payload = this.containsObject(newItem,cart);// willl check if the item was already in the cart and store information on payload.
			
			if(!payload.ans) //if item was not on the cart
				newitems.push(newItem); //push item to newitems array.
			else
			{//old item
				console.log("newITEMS CHECK", newitems);
				console.log("payload##########",payload);
				if(!newitems[payload.index].cant)
					newitems[payload.index].cant = 1
				else
					newitems[payload.index].cant += 1; //add to the cant variable. (cant = amount)
				//new items
				newitems[payload.index].total = newitems[payload.index].cant * newitems[payload.index].precio // total amount equals amount times price.
			}

		if(this.user){
			Carts.child(this.user.uid).update(newitems); // updates FB cart
			let val = "";
			Carts.child(this.user.uid).once('value', snapshot => {
				val = Object.keys(snapshot.val());
				const index = val.indexOf("cart");
				
				if(index > 0){
					Carts.child(this.user.uid).update({cart:null});
				}
			});
			
				

		}
		else{
			
			localStorage.setItem("cart", JSON.stringify(newitems)); // updates local cart.
			
		}

		this.setState({items:newitems}); // update STATE
		

		const toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		  });
		  
		  toast({
			type: 'success',
			title: newItem.nombre + ' was added to your cart!'
			
		  })

		  this.doCart(false); //updates visual Cart.
	}

	minusItem(newItem,flag = false){
		
		let newitems = [];

		if(!newItem) // if no items, return.
			return;
		
		newitems = this.state.items; // store state variable in local variable.
		newItem.tb = this.getThumbnail(newItem.url); //get thumbnail for item.
		
		if(!flag){//this will only be true if plus button on cart is being pushed.
			newItem.cant = 1; // add a cant variable to the item.
			newItem.total = parseInt(newItem.precio); // make sure price is a int and add it to total variable.
		}
		
		let index = 0; // not sure if necessary.
		let cart = []; // start with empty cart


		if(this.user){
			cart =  this.props.cart;// if user logged populate cart with FB's cart.
			//Carts.child(this.user.uid).push(newItem);
		}
		else{			
			if (typeof localStorage["cart"] !== "undefined" && localStorage["cart"] !== "undefined")//checks if there is a local cart.
				cart = [...JSON.parse(localStorage.cart)]; //if not logged populate with local cart.

		}

		

		let payload = this.containsObject(newItem,cart);// willl check if the item was already in the cart and store information on payload.
			
			if(!payload.ans) //if item was not on the cart
				newitems.push(newItem); //push item to newitems array.
			else
			{//old item
				
				if(!newitems[payload.index].cant)
					newitems[payload.index].cant = 1
				else
					newitems[payload.index].cant -= 1; //add to the cant variable. (cant = amount)

				if(newitems[payload.index].cant < 1)
					this.removeItem(newItem);
				//new items
				newitems[payload.index].total = newitems[payload.index].cant * newitems[payload.index].precio // total amount equals amount times price.
			}

		if(this.user){
			Carts.child(this.user.uid).update(newitems); // updates FB cart
		}
		else{
			localStorage.setItem("cart", JSON.stringify(newitems)); // updates local cart.
		}

		this.setState({items:newitems}); // update STATE
		
		
				// if(newitems[payload.index].cant < 1)
				// 	this.removeItem(newItem);
			
		

		const toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		  });
		  
		  toast({
			type: 'success',
			title: '1 ' + newItem.nombre + ' was removed from your cart!'
			
		  })

		  this.doCart(false);
	}

	removeItem(newItem){
		
		let newitems = [];
		newitems = this.state.items;
		if(newItem){
			_.remove(newitems, function(n) {
				return n == newItem;
			});
			if(this.user){
				Carts.child(this.user.uid).set(newitems); // updates FB cart
			}
			else{
				localStorage.setItem("cart", JSON.stringify(newitems)); // updates local cart.
			}
			this.setState({items:newitems});
		}

		this.doCart(false);
	}

	signOut(e) {
	    e.preventDefault();
	    firebase.auth().signOut().then(function() {
	      // Sign-out successful.
				// alert("BYE!");
				window.location.reload();
	    }).catch(function(error) {
	      // An error happened.
	      alert("Yikes somethng HAPPEND",error);
	    });
	  }

	componentDidMount(){
		let self = this;
		window.onscroll = function() {
			var d = document.documentElement;
			var offset = d.scrollTop + window.innerHeight;
			var height = d.offsetHeight;
		  
			if (offset >= height - 200) {
			  self.setState({isBottom:true})
			}
			else
			self.setState({isBottom:false})
		  };
		
	}

	doCart(){

		var user = firebase.auth().currentUser;

		this.props.getProductos();
		this.props.getThumbnails();
		
		let cart = []
		//TODO :cuando inicia sesion local storage merge con base de datos y mantener en local storage.
		//		en el logout destruyo local storage
		
		if(user){
			this.logged = true;
			let lcart = this.props.cart //get cart from id
			cart = this.state.items;

		}
		else{
			if (typeof localStorage["cart"] !== "undefined" && localStorage["cart"] !== "undefined")
				cart = [...JSON.parse(localStorage.cart)];
			
		}
		
		
		this.setState({items:cart});
		

	}

	componentWillMount() {
		if(this.user)
			this.props.getCartById(this.user.uid);
		this.doCart();
		
	}

	componentWillReceiveProps(nprop){
		if(nprop.cart){
			if(this.user)
				if(!nprop.cart.length){
					this.setState({items:[]});
				}
				else{
					this.setState({items:nprop.cart});
				}
		}
	}
	showFrontImage(){
		return this.props.history.location.pathname === "/aboutus"?false:true;
		
	}

	

  render() {

    return (
  	
    <div className="home ">
    	<MenuBar isBottom={this.state.isBottom} items={this.state.items} removeItem={this.removeItem} addItem={this.addItem} minusItem={this.minusItem} signOut={this.signOut} islogged={this.logged} ></MenuBar>
			
      {/* https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2F3.jpg?alt=media&token=696888a2-4a74-4ac1-a3fa-872076c33730 */}
      {/* https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FBloko.jpg?alt=media&token=7250d094-1a9c-47a4-aa9e-294e768a96f2 */}
    {
    	this.showFrontImage()?
      	<div className="frontImage">
	      	<LazyLoad height={200} placeholder={<PlaceholderComponent />}>
	        	<img className="objetFit" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FBloko.jpg?alt=media&token=7250d094-1a9c-47a4-aa9e-294e768a96f2" />
	        </LazyLoad>
        </div>
        :
        <span></span>
    }
        
        {/* <video muted autoPlay bucle className="objetFit" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FPasha.mp4?alt=media&token=573b7806-0508-4618-beea-9f79993f954b"></video> */}
      
      
    	
    		<Switch>
					<Route path = "/collection/:cat/:subcat" render = {routeProps => <Collection {...routeProps} addItem={this.addItem} />}/>
					<Route path = "/collection/:cat" render = {routeProps => <Collection {...routeProps} addItem={this.addItem} />}/>
					<Route path = "/collection" render = {routeProps => <Collection {...routeProps} addItem={this.addItem} />}/>
					<Route path = "/aboutus" render = {routeProps => <Aboutus {...routeProps}/>}/>
					<Route path = "/"  render = {routeProps => <Landing {...routeProps} nhistory={this.props.history.location.pathname} />}/>
			</Switch>
		

			
    </div>
    
  );
  }
}

let form = reduxForm({
	form: 'NewPost'
})(Home);

form = connect(mapStateToProps,{ getProductos })(form);

export default withRouter(connect(mapStateToProps,{ getProductos,getThumbnails,getUser,getCartById })(Home));
