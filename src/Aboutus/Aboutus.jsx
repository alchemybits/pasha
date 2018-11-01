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
        <p>Hailing from the enchanting islands of the former Dutch East Indies, &ldquo;PASHA Jewelry for your feet&rdquo; is a beautiful collection of bejeweled sandals that channel an Italian Capri look.</p>
        <p>Each pair is made of highest quality genuine leather and artistically handcrafted in a manner that takes eight to twelve hours per pair, incorporating exclusive Czech rhinestones combined with unique gemstones, shells and natural stones sourced from exotic locations worldwide.</p>
        <p>These come in flats, wedges and heels, packed with stylish organza bag and a golden shoe box.</p>
        <p>&ldquo;PASHA Jewelry for your feet&rdquo; can be worn for a day out or for a special evening occasion. They are glitzy, sparkling, glamorous, elegant, stylish and chic with ongoing collections for every season. </p>
        <p>We constantly come up with new styles that are in touch with latest fashion trends, so you will never be bored and always be yearning for more!</p>
        <p>With a thought towards creating wardrobe of bejeweled wear, we have further introduced beachwear, headbands and combination neckwear to compliment &ldquo;Pasha Jewelry for your feet&rdquo;.</p>
        <p>Our products are carried by retailers who simultaneously carry other luxurious and high-end brands globally. Some of them to name few as follows:</p>
        <ul>
        <li><b>Kitson-Kitross at LA,</b> which is well-known in USA for the shopping paradise of celebrities. One of our style was highlighted on the home page of KITSON's website, and several styles are being sold in its online and physical stores.</li>        
        <li >Rodeo Boutiques at Atlantis The Palm, Dubai</li>
        <li >Beach Bunny at La Mer, Dubai</li>
        <li > <b>Boutiques </b> at Baha Mar, Bahamas</li>
        <li > <b>Pasha Flagship Stores </b>, Central America</li>        
        </ul>
        <p>Our quality designs are now featured globally in renowned media, and liked by international figures.</p>
        <p>Our Corporate Social Responsibility (CSR) extends with PASHA's active participation in O.C.A.D</p>
        <br/>
        <div class="flex">
        <div className="wrapper">
          <div className="content4">
            <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
              <img class="contentimg" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/IMG_9846.jpg?alt=media&token=338de1d1-6ad2-43f9-8d3c-050798b9122a" alt="The Former First Lady of Honduras Aguas Oca&ntilde;a as image of the Brand." />
            </LazyLoad >
            
          </div>
          <p className="content4p">
          Former First Lady of Honduras Aguas Oca&ntilde;a, <br/> 
          One of Pasha's Brand Ambassadors.
          
          </p>
          </div>
          <div className="wrapper">
          <div className="content4">
            <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
              <img class="contentimgo" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/logo%20ocad-01.png?alt=media&token=ae2a7e3a-d9f3-4bde-af21-43abdb500dd4" alt="The Former First Lady of Honduras Aguas Oca&ntilde;a as image of the Brand." />
            </LazyLoad >
            
          </div>
          <p className="content4p">
          As part of Pasha’s social work in Central America, we support O.C.A.D <br/>
          foundation towards combating child malnutrition
          </p>
          </div>
          {/* <p class="" style={{padding:"10px"}}>
          <a href="https://www.facebook.com/ocadhn/" target="_blank">
            <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
              <img className="ocadimg" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/IMG_9793.jpg?alt=media&amp;token=df37a1ee-c976-4574-bee0-a382e8624677" alt="The Former First Lady of Honduras Aguas Oca&ntilde;a as image of the Brand." />
            </LazyLoad>
          </a>
          The Former First Lady of Honduras Aguas Oca&ntilde;a as image of the Brand.
          </p>
          <p class="" style={{padding:"10px"}}>
          <a href="http://www.fundacionocad.org/" target="_blank">
            <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
              <img className="ocadimg" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/OCAD.png?alt=media&token=b7c9c4d7-4a21-45c5-bedb-0e195a8fd107" alt="The Former First Lady of Honduras Aguas Oca&ntilde;a as image of the Brand." />
            </LazyLoad>
          </a>
          PASHA is socially responsible, providing support to the OCAD foundation as part of his Social work in Central America against child malnutrition.
          </p> */}
        </div>
      </div>
      <div className="content1">
        <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
          <img class="contentimg" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FUntitled.png?alt=media&token=868733d3-e90f-48c1-b5f2-9b4a55a2f027" />
        </LazyLoad >
      </div>
      <div className="content2">
        <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
          <img class="contentimg" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FIMG_1239.jpg?alt=media&token=be6a3259-f030-4678-92a4-0aaa3701d79b" />
        </LazyLoad >
      </div>
      <div className="content3">
        <LazyLoad height={200} offset={100} placeholder={<PlaceholderComponent />}>
          <img class="contentimg" src="https://firebasestorage.googleapis.com/v0/b/pashav2-eef6b.appspot.com/o/productos%2FCorfu.jpg?alt=media&token=8c5c441e-a3f6-4e71-88fd-b369e4c86fe7" />
        </LazyLoad >
      </div>
      <div className="footer">
          <p>Derechos reservados, Pasha Centroamerica, 2108</p>
      </div>


    </div>
  );
};

export default template;
