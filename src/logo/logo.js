import React    from "react";
import template from "./logo.jsx";
import templateB from "./logoB.jsx";
// import {  BrowserRouter as Redirect } from 'react-router-dom'



class Logo extends React.Component {
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


Logo.defaultProps = {
  iconWidth: '80',
  iconHeight: '80',
  fontSize: '48'
};

class LogoB extends React.Component {
  constructor(){
    super();

    this.refresh = this.refresh.bind(this);
  }

  refresh(){
    
    if(!this.props.noclick)
      window.location = "/";
  }

  render() {
    return templateB.call(this);
  }
}


LogoB.defaultProps = {
  iconWidth: '1056',
  iconHeight: '816',
  fontSize: '48',
};


export { Logo,LogoB }
