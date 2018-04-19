import React    from "react";
import * as firebase from 'firebase';
import {} from '../Firebase.js';
// import _ from 'lodash';



import "./Home.css";
import MenuBar from "../menuBar/menuBar";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import { connect } from 'react-redux';

import { getPartidos } from '../Actions/torneoActions';
import {reduxForm } from 'redux-form';

function mapStateToProps(state) {
  return {
    torneos: state.torneos
  };
}


class Home extends React.Component {

	constructor(){
		super();

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
		var user = firebase.auth().currentUser;
		if (user != null) {
		  this.logged = true;
		}
		else
			this.logged = false;

			console.log("***** => ",this.logged);
	}

	componentWillMount() {
		this.props.getPartidos();
		
	}

  render() {
    return (
  	
    <div className="home ">
    	<MenuBar signOut={this.signOut} islogged={this.logged}></MenuBar>
			<Slider></Slider>
			<div className="box font left-text">
				<h4 >/ FEATURED PRODUCTS .</h4>
			</div>	
			
			<Products></Products>
    </div>
    
  );
  }
}

let form = reduxForm({
	form: 'NewPost'
})(Home);

form = connect(mapStateToProps,{ getPartidos })(form);

export default connect(mapStateToProps,{ getPartidos })(Home);;
