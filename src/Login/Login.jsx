import "./Login.css";
import React from "react";
import Logo from "../logo/logo";

function template() {
  return (
  	<div>
<div className="pen-title">
   <Logo iconWidth="70" ></Logo>
</div>
<div className="container">
  <div className="card"></div>
  <div className="card">
    <h1 className="title">Login</h1>
    <form onSubmit={this.userLogin}>
      <div className="input-container">
        <input type="text" id="email" required="required" value={this.state.email} name="email" onChange={this.handleChange}/>
        <label htmlFor="email">Email</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="password" id="password" required="required" value={this.state.password} name="password" onChange={this.handleChange}/>
        <label htmlFor="password">Password</label>
        <div className="bar"></div>
      </div>
      <div className="button-container">
        <button><span>Go</span></button>
      </div>
      <div className="footer"><a href="#">Forgot Password?</a></div>
    </form>
  </div>
  <div className="card alt">
    <div className="toggle" onClick={((e) => this.toggleClass(e))}></div>
    <h1 className="title">Register
      <div className="close" onClick={((e) => this.toggleClass(e))}></div>
    </h1>
    <form onSubmit={this.register}>
      <div className="input-container">
        <input type="text" id="rusername" required="required" value={this.state.name} name="name" onChange={this.handleChange}/>
        <label htmlFor="rusername">Name</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="email" id="remail" required="required" value={this.state.email} name="email" onChange={this.handleChange}/>
        <label htmlFor="remail">Email</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="password" id="rpassword" required="required" value={this.state.password} name="password" onChange={this.handleChange}/>
        <label htmlFor="password">Password</label>
        <div className="bar"></div>
      </div>
      <div className="input-container">
        <input type="password" id="rrpassword" required="required" value={this.state.rpassword} name="rpassword" onChange={this.handleChange}/>
        <label htmlFor="password">Confirm Password</label>
        <div className="bar"></div>
      </div>
      <div className="button-container">
        <button><span>Next</span></button>
      </div>
    </form>
  </div>
</div>
</div>

  );
};

export default template;

// <!-- Portfolio--><a id="portfolio" href="http://andytran.me/" title="View my portfolio!"><i className="fa fa-link"></i></a>
// <!-- CodePen--><a id="codepen" href="https://codepen.io/andytran/" title="Follow me!"><i className="fa fa-codepen"></i></a>


