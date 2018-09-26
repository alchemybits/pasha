import "./Aboutus.css";
import React from "react";
import LazyLoad from 'react-lazyload';
import PlaceholderComponent from "../PlaceholderComponent/PlaceholderComponent";

function template() {
  return (
    <div className="aboutus">
      <div className="left">
        <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
          <img src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FNova.jpg?alt=media&token=c2d84d53-6446-435c-9c5d-63f7a4e8fdd0" />
        </LazyLoad >
      </div>
      <div className="header">
        <h1 style={{borderBottom: "3pt solid #B68738"}}>About Us</h1>
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
        <p>Our branded products are usually carried by wholesalers or retailers which simultaneously carry other world-famous luxurious or high-end brands. Currently, our branded products have been distributed in many cities and countries worldwide.</p>
        <br/> 
      </div>
      <div className="content1">
        <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
          <img src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FUntitled.png?alt=media&token=868733d3-e90f-48c1-b5f2-9b4a55a2f027" />
        </LazyLoad >
      </div>
      <div className="content2">
        <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
          <img src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FIMG_1239.jpg?alt=media&token=be6a3259-f030-4678-92a4-0aaa3701d79b" />
        </LazyLoad >
      </div>
      <div className="content3">
        <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
          <img src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FCorfu.jpg?alt=media&token=8c5c441e-a3f6-4e71-88fd-b369e4c86fe7" />
        </LazyLoad >
      </div>


    </div>
  );
};

export default template;
