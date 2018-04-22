import React    from "react";
import * as firebase from 'firebase';
import {} from '../Firebase.js';
// import _ from 'lodash';



import "./Home.css";
import MenuBar from "../menuBar/menuBar";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import { connect } from 'react-redux';

import { getProductos } from '../Actions/Actions';
import {reduxForm } from 'redux-form';

function mapStateToProps(state) {
	//console.log("state in props from HOME =>",state);
  return {
    productos: state.productos
  };
}


class Home extends React.Component {
	

	constructor(){
		super();

		let logged = false;

		this.increment = this.increment.bind(this);
	}

	increment() {
		this.props.dispatch({ type: 'INCREMENT' });
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
	}

	componentWillMount() {
		var user = firebase.auth().currentUser;
		if (user != null) {
			//console.log("====user===",user);
		  this.logged = true;
		}
		else
			this.logged = false;

		this.props.getProductos();
		
	}

  render() {
    return (
  	
    <div className="home ">
    	<MenuBar signOut={this.signOut} islogged={this.logged} ></MenuBar>
			<Slider></Slider>
			<div className="box font left-text">
				<h4 >/ FEATURED PRODUCTS .</h4>
			</div>	
			
			<Products ></Products>
    </div>
    
  );
  }
}

let form = reduxForm({
	form: 'NewPost'
})(Home);

form = connect(mapStateToProps,{ getProductos })(form);

export default connect(mapStateToProps,{ getProductos })(Home);
