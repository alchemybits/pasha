import "./FancyButton.css";
import React from "react";

function template() {
  let add = <button className={"custom-btn btn-"+this.props.type} onClick={this.go.bind(this,(this.props.link)?this.props.link:"#")} ><span>{this.props.desc}</span></button>
  if(this.props.addItem)
   add = <button className={"custom-btn btn-"+this.props.type} onClick={() => {this.props.addItem("this.props.items")}} ><span>{this.props.desc}</span></button>
  

  return (
    <div className={"fancy-button "+this.props.class}>
      {add}
      
    </div>
  );
};

export default template;
