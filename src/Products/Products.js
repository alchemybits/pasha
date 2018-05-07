import React    from "react";
import template from "./Products.jsx";
import { connect } from 'react-redux';


import { getFeaturedProductos } from '../Actions/Actions';


function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    productos: state.productos
  };
}

class Products extends React.Component {

  
  constructor(){
    super();
    
    this.state = {
      productos: ["0"]
    };
	}

  componentDidMount(){
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ productos: nextProps.productos });  
  }

  componentWillMount() {
    this.props.getFeaturedProductos();
  }
  
  render() {
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getFeaturedProductos })(Products);
