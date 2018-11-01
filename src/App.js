  import React from 'react';
import * as firebase from 'firebase';
import Login from './Login/Login';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import admin from './admin/admin';
// import Landing from './Landing/Landing';

import { connect } from 'react-redux';


import {  BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { firebaseAuth } from './config/constants'


  // Initialize Firebase


function PrivateRoute ({component: Component, authed, ...rest}) {
  //console.log("$$$$$",authed);
  return (
    
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/App' />}
    />
  )
}



class App extends React.Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount(){
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })

  }

  hashLinkScroll() {
    const { hash } = window.location;
    console.log("YEP HASH HERE",hash);
		if (hash !== '') {
			// Push onto callback queue so it runs after the DOM is updated,
			// this is required when navigating from a different page so that
			// the element is rendered on the page before trying to getElementById.
			setTimeout(() => {
				const id = hash.replace('#', '');
				const element = document.getElementById(id);
				if (element) element.scrollIntoView();
			}, 0);
		}
	}

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.state.loading === true ? <Loading /> : (
      
      <Router onUpdate={() => this.hashLinkScroll()}>
        <Switch>
            <PrivateRoute authed={this.state.authed} path='/admin' component={admin} />
            <PublicRoute authed={this.state.authed} path='/login' component={Login} />
            <Route path = "/" authed={this.state.authed} component = {Home}/>
          
        </Switch>
      </Router>

    );
  }
}

export default connect(mapStateToProps)(App);

// <Route path = "/OrderTracker" component = {Tracker}/>