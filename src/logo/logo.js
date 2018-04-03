import React    from "react";
import template from "./logo.jsx";
import {  BrowserRouter as Redirect } from 'react-router-dom'



class logo extends React.Component {
  constructor(){
    super();

    this.refresh = this.refresh.bind(this);
  }

  refresh(){
    window.location = "/";
  }

  render() {
    return template.call(this);
  }
}
logo.defaultProps = {
	iconWidth: '80',
	iconHeight: '80',
	fontSize: '48'
};
export default logo;
