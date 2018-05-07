import "./FancyButton.css";
import React from "react";

function template() {
  return (
    <div className="fancy-button">
      <button className={"custom-btn btn-"+this.props.type} onClick={this.go.bind(this,(this.props.link)?this.props.link:"#")} ><span>{this.props.desc}</span></button>
      
    </div>
  );
};

export default template;
