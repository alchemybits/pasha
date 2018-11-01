import React    from "react";
import template from "./FeaturedProducts.jsx";
import { getFeaturedProductos } from '../Actions/Actions';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  //console.log("state in props from PRODUCTS =>",state);
  return {
    productos: state.productos
  };
}



class FeaturedProducts extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      productos: []
    }
  }

  componentWillMount() {
    this.props.getFeaturedProductos();
  }

  render() {
    // let element = document.querySelector(".product");
    // element.scrollIntoView(true);
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getFeaturedProductos })(FeaturedProducts);
