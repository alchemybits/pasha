import React    from "react";
import template from "./Collection.jsx";
import swal from "sweetalert2";
import { connect } from 'react-redux';
import { getProductos } from '../Actions/Actions';

function mapStateToProps(state) {

  //console.log("state in props from PRODUCTS =>",state);
  return {
    productos: state.productos
  };
}


class Collection extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      collection: []
    }

    this.ssearchQueryearch = this.searchQuery.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   let productosBox = this.state.collection;
  //   productosBox.push(nextProps.productos);
  //   this.setState({ collection: productosBox });  
  // }

  componentWillMount() {
    this.props.getProductos();
  }

  search(){
    const search = document.getElementById("searchbar-input");
    search.classList.toggle("opensearch");
    search.classList.toggle("closesearch");
    const icon = document.getElementById("searchbar-icon");
    icon.classList.toggle("fa-search");
    icon.classList.toggle("fa-times");
    
  }

  searchQuery(e){
    e.preventDefault();
    this.props.getProductos(document.getElementById("searchbar-input").value);
  }

  render() {
    return template.call(this);
  }
}

export default connect(mapStateToProps,{ getProductos })(Collection);
