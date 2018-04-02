import React    from "react";
import * as firebase from 'firebase';
import {} from '../Firebase.js';
import _ from 'lodash';



import "./Home.css";
import MenuBar from "../menuBar/menuBar";
import { connect } from 'react-redux';

import { getPartidos } from '../Actions/torneoActions';
import { Field, reduxForm, reset } from 'redux-form';

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
	      alert("BYE!");
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
  	
    <div className="home">
    	<MenuBar signOut={this.signOut} islogged={this.logged}></MenuBar>
    	<img src="//cdn.shopify.com/s/files/1/1089/1046/t/3/assets/slide_5_1310x.jpg?7495267469806183633" alt=""/>
    </div>
    
  );
  }
}

let form = reduxForm({
	form: 'NewPost'
})(Home);

form = connect(mapStateToProps,{ getPartidos })(form);

export default connect(mapStateToProps,{ getPartidos })(Home);;
