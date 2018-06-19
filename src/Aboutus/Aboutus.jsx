import "./Aboutus.css";
import React from "react";

function template() {
  return (
    <div className="aboutus">
      <h1 style={{fontSize:"25px",margin:"20px 0px 20px 0px",borderBottom: "3pt solid #B68738"}}>About Us</h1>
      <p>Hailing from the enchanting islands of the former Dutch East Indies, "PASHA Jewelry for your feet" is a beautiful collection of bejeweled sandals that channel an Italian Capri look. </p>
      <p>Each pair is made of the highest quality genuine leather and is artistically handcrafted in a manner that takes eight to twelve hours per pair, incorporating exclusive Czech rhinestones combined with unique gemstones, shells and natural stones which are sourced from exotic locations worldwide.</p>
      <p>These beautiful styles come in flats, wedges, heels and boots, further enhanced with a stylish silver organza bag and golden shoe box.</p>
      <p>"PASHA Jewelry for your feet" can be worn for a day out or for a special evening occasion. They are glitzy, sparkling, glamorous, elegant, stylish and chic with ongoing collections for every season. </p>
      <p>We constantly come up with new styles that are in touch with the latest fashion trends, so you will never be bored and will always be yearning for more! </p>
      <p>Thanks to our nice, trendy design and high quality, our branded products have been featured and selected by renowned media and retailers as follows : </p>
      <ul>
        <li><b>MARIE CLAIRE</b>, a world famous fashion magazine.</li>
        <li><b>THE SWIM JOURNAL</b>, which claims to be bible of the industry.</li>
        <li><b>THE SWIMSHOW NEWSLETTER</b>, operated by The Swimwear Association of Florida, which claims to be the leader in swimwear exhibitions worldwide and is the largest of its kind in the world.</li>
        <li><b>KITSON LA</b>, which is well-known in USA for the shopping paradise of celebrities. One of our style was highlighted on the home page of KITSON's website, and several styles are being sold in its online and physical stores.</li>
        <li><b>BOUDI</b>, a famous high-end fashion retailer in UK.</li>
        <li><b>DESIGNER DESIRABLES</b>, a famous high-end fashion retailer in UK.</li>
      </ul>
      <p>Our branded products are usually carried by wholesalers or retailers which simultaneously carry other world-famous luxurious or high-end brands. Currently, our branded products have been distributed in many cities and countries worldwide, including but not limited to :</p>
      <br/>

      <div className="flex">
      
        <div>
        <div className="table">
          <div className="row">
            <div className="cell">LONDON</div>
            <div className="cell">MAUI</div>
            <div className="cell">DUBAI</div>
            <div className="cell">PANAMA</div>
          </div>
          <div className="row">
            <div className="cell">NEW YORK</div>
            <div className="cell">COTE D'AZUR</div>
            <div className="cell">ABU DHABI</div>
            <div className="cell">ABUJA</div>
          </div>
          <div className="row">
            <div className="cell">LOS ANGELES</div>
            <div className="cell">DUSSELDORF</div>
            <div className="cell">HONG KONG</div>
            <div className="cell">MIAMI</div>
          </div>
          <div className="row">
            <div className="cell">CARIBBEAN</div>
            <div className="cell">MOSCOW</div>
            
          </div>
        </div>
        </div>
        <div className="end">
        <img src="../assets/images/signature.png" alt=""/>
        </div>
        
      </div>
    </div>
  );
};

export default template;
