import React    from "react";
import template from "./Products.jsx";
import { connect } from 'react-redux';


import { getProductos } from '../Actions/Actions';


function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    productos: state.productos
  };
}

class Products extends React.Component {

  
  constructor(){
		super();
	}

  componentDidMount(){
    
  }

  componentWillMount() {
    this.props.getProductos();
  }
  
  render() {
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getProductos })(Products);
