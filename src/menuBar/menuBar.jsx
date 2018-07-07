import "./menuBar.css";
import React from "react";
import { Logo } from "../logo/logo";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { withRouter,Link } from 'react-router-dom';
import FancyButton from "../FancyButton/FancyButton";



function guest(path,func,itemslen){
	console.log("this is path",path);
	// const add = (path == "/Collection" || path == "/collection" )?"":<span><i className="material-icons" ><Link to="/Collection">search</Link></i></span>;
	return (
		<div className="flex column">
			<b style={{marginTop:"10px"}} className="simple"><a href="/login">Log in </a> | <a href="/login/register"> Register</a></b>
			<div className="icons" style={{marginTop:"5px"}}>
			
			{/* {add} */}
			<span><i className="material-icons"><Link to="/Collection">search</Link></i></span>
			<span><i className="material-icons">favorite</i></span>
			<span className="relative"><i className="material-icons" onClick={func}>shopping_cart</i><span className="circleCART">{itemslen}</span></span>
			
			</div>
			
		</div>
	)
}

function logout(path,func,cartFunc,itemslen){
	// const add = (path == "/Collection" || path == "/collection" )?"":<span><i className="material-icons"><Link to="/Collection">search</Link></i></span>;
	return (
		<div className="flex column">
		<br/>
				<b className="simple" onClick={func}>Log Out</b>
				<div className="icons" style={{marginTop:"5px"}}>
					
					<span><i className="material-icons"><Link to="/Collection">search</Link></i></span>
					<span><i className="material-icons">favorite</i></span>
					<span className="relative"><i className="material-icons" onClick={cartFunc}>shopping_cart</i><span className="circleCART">{itemslen}</span></span>
					
				</div>
		</div>
	)
}

function template() {
	let TOTAL =0;
	let TOTALITEMS = 0;
	let items = [{nombre:"",cant:0}];
	if(this.props.items)
		items = this.props.items;
	
	let array = [];
	items.map(item => {array.push(item.cant)});

	if(array.length > 0)
		TOTALITEMS = array.reduce((TOTAL,n) => TOTAL + n);

  return (
    <div className="menu-bar" id="menuBarTracker" onScroll={this.scrollTrack()}>
		<div id="cart" className="closed" >
			<p className="gcart">SHOPPING CART</p>
			<div id="EX" onClick={() => this.closeCart()}>&times;</div>
			<div className="cartTittle">
				<p>you have <span style={{color:"red"}}>{TOTALITEMS} item(s)</span> in your shopping cart</p>
			</div>
			<div className="items">
			{
				
				items.map((item,index) => {
					TOTAL += item.total;
					
					return (
					<div key={index} className="item">
						<div className="cartItemContainer f2">
							<div className="cartItemContained">
								<img className="" src={item.tb} alt=""/>
							</div>
							
						</div>
						<div className="cartItemContainer f2">
							
						
							<div className="textWrapper Aligner">
							{/* <div className="more">
								circleITEM
								<span className="minus" onClick={() => {this.props.minusItem(item,true)}}><i className="material-icons" >remove_circle_outline</i></span>
								
								
								<span className="plus" onClick={() => {this.props.addItem(item,true)}}><i className="material-icons">add_circle_outline</i></span>
							</div> */}

								<div className="Aligner-item">
									<h4 className="itemTittle">{item.nombre.toUpperCase()}</h4>
									<p className="itemTittle " style={{fontWeight:"500",color:"grey"}}><span className="" style={{color:"lightslategray"}}>{item.cant}x</span> HKD {item.precio}</p>
								</div>
								<div className="more">
									<span className="minus" onClick={() => {this.props.minusItem(item,true)}}><i className="material-icons" >remove</i></span>
									<span className="plus" onClick={() => {this.props.addItem(item,true)}}><i className="material-icons">add</i></span>
								</div>
								
							
							</div>
						</div>
						<div className="cartItemContainer f1 table">
						<div className="textWrapper closeIcon Aligner">
								<h4 className="itemTittle pointer Aligner-item" onClick={() => {this.props.removeItem(item)}} style={{color:"grey",fontSize:"25px"}}>&times;</h4>
							</div>
						</div>
					</div>
					)

				})
			}
			
				
			</div>

			<div className="cartFooter">
			<h4><span className="leftText"> SUBTOTAL:</span> <span className='rightText'>{TOTAL?"HKD " + TOTAL:""}</span> </h4>
			<div className="bcontainer">
				<button><span>ORDER</span></button>
			</div>
			</div>
			
		</div>
		<div className="resizeLogo">
			<Logo iconWidth="400" iconHeight="400" fontSize="10" className="f2 "></Logo>
		</div>

		<div className="space"></div>
		<div className="extended back"></div>
		
    	<div className="extended front">
			
	      <ul className="snip1189 f20">
					<li id="home" className="current"><Link to="/">HOME</Link></li>
					{/* <li id="home" className=""><a href="/">HOME</a></li> */}
					<li id="aboutus"><Link to="/aboutus">ABOUT US</Link></li>
					<li id="collection"><Link to="/Collection#collection">COLLECTION</Link></li>
					<div id="hiddenMenu">
						<ul>
							<li><Link to="/Collection#collection">SHOW ALL</Link></li>
							<li><Link to="/Collection/New-Arrival#collection">NEW ARRIVAL</Link></li>
							<li><Link to="/Collection/Flat#collection">FLATS</Link></li>
							<li><Link to="/Collection/Wedges#collection">WEDGES</Link></li>
							<li><Link to="/Collection/Heels#collection">HEELS</Link></li>
							<li><Link to="/Collection/Gladiators#collection">GLADIATORS</Link></li>
							<li><Link to="/Collection/Mules#collection">MULES</Link></li>
							<li><Link to="/Collection/Bridal#collection">BRIDAL</Link></li>
							<li><Link to="/Collection/Hair-Accesories#collection">HAIR ACCESORIES</Link></li>
							<li><Link to="/Collection/Gift-Card#collection">GIFT CARD</Link></li>
						</ul>
					</div>
					{/* <li id="collection"><a href="/Collection" >COLLECTION</a></li> */}
					<li id="lookbook"><Link to="/lookbook">LOOK BOOK</Link></li>
					<div id="hiddenMenuLookBook">
						<ul>
							<li><Link to="/lookbook/2016">2016</Link></li>
							<li><Link to="/lookbook/2017">2017</Link></li>
							<li><Link to="/lookbook/2018">2018</Link></li>
						</ul>
					</div>
					{/* <li id="instock"><a href="/instock">IN STOCK</a></li> */}
					{/* <li><a href="">B2B</a></li> */}
					<li id="contactus"><Link to="/contactus">CONTACT US</Link></li>

					
				</ul>
		<div className="logWrapper">{this.props.islogged ? logout(this.props.history.location.pathname,this.props.signOut,(() => this.closeCart()),TOTALITEMS) : guest(this.props.history.location.pathname,(() => this.closeCart()),TOTALITEMS)}</div>
			
			
    	</div>
		
		<div className="short">
		<div className="menu-wrapper" onClick={this.menuToggle}>
			<div className="hamburger-menu" ></div>	  
		</div>
		<div className="shortMenu close">
		<div className="shortlogWrapper ">{this.props.islogged ? logout(this.props.history.location.pathname,this.props.signOut,(() => this.closeCart()),items.length) : guest(this.props.history.location.pathname,(() => this.closeCart()),items.length)}</div>
			<br/>
			<ul className="snip1189 f20 leftMenu">
			
				{/* <li id="home" className=""><a onClick={() => { this.props.history.push('/') }}>HOME</a></li> */}
				<li id="home" className="current"><a href="/">HOME</a></li>
				<li id="aboutus"><a href="/aboutus">ABOUT US</a></li>
				{/* <li id="collection"><a onClick={() => { this.props.history.push('/Collection') }}>COLLECTION</a></li> */}
				<li id="collection"><a href="/Collection" >COLLECTION</a></li>
				<li id="newarrival"><a href="/newarrival">NEW ARRIVAL</a></li>
				{/* <li id="instock"><a href="/instock">IN STOCK</a></li> */}
				{/* <li><a href="">B2B</a></li> */}
				<li id="contactus"><a href="/contactus">CONTACT US</a></li>
				
			</ul>
			
		</div>
			
		</div>


		  
		
    </div>
  );
};

export default template;
