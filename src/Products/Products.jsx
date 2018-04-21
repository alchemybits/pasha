import "./Products.css";
import React from "react";
import _ from 'lodash';

function template() {
  return (
    <div className="products">
      { _.map(this.props.productos, (producto, key) => {
      		return (
            <div className="product" key={key}>
              <img src={producto.url} alt=""/>
              <footer>
                <div className="tittle">
                  {producto.nombre}
                </div>
                <div className="prodDescription">
                  {producto.desc}
                </div>
                <div className="price">
                <div className="header">
                  <span>$ </span>{producto.precio}
                </div>
                </div>
                <div className="add-to-cart">ADD TO CART</div>
              </footer>
            </div>
      			
      		);

        })
      }
    </div>
  );
};

export default template;
