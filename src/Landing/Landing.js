import React    from "react";
import template from "./Landing.jsx";
import { withRouter } from 'react-router-dom';


class Landing extends React.Component {
  componentDidMount(){
    console.log("this is homes history",this.props.nhistory);
    console.log("this is landings history",this.props.history.location.pathname);
    
    
  }

  render() {
    return template.call(this);
  }
}

export default withRouter(Landing);
