import React    from "react";
import template from "./FancyButton.jsx";

class FancyButton extends React.Component {
  go(link){
    if(link !== "#")
      window.location = link
    
  }
  render() {
    return template.call(this);
  }
}

export default FancyButton;
