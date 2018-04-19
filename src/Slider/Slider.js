import React    from "react";
import template from "./Slider.jsx";

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      slides: []
    };

    this.goUp = this.goUp.bind(this);
    this.goDown = this.goDown.bind(this);
     

  }

  componentDidMount(){
    let slides = document.querySelectorAll(".slideswrap .slide");
    const slidesArray = Array.from(slides);
    console.log(slidesArray);//slides in array

    this.setState({
      slides: slidesArray
    })

  }

  goUp(){
    const len = this.state.slides.length;
    let targetindex = len; // get amout of slides

    this.state.slides.map( (slide,index) => { //loops over slides
      
      if ( (" " + slide.className + " ").replace(/[\n\t]/g, " ").indexOf(" active ") > -1 ) //identify the slide with the class "active"
      {
        console.log({slide,index});
        slide.classList.remove("active");//removes the slide with the "active" class slide.
        if(index == len - 1){ // if the index of the slide is at the end of array
          targetindex = 0;  // set the next active slide's index to 0
        }
        else {
          targetindex = index + 1; // else add 1 to the index so it can go upwards the slides.
        }
        
      }
    })

    this.state.slides[targetindex].classList.add("active");// add "active" class to the next slide
    this.state.slides[targetindex].classList.remove("hide");// remove the "hide" class to the next slide.
  }

  goDown(){
    const len = this.state.slides.length;
    let targetindex = len; // get amout of slides

    this.state.slides.map( (slide,index) => { //loops over slides
      
      if ( (" " + slide.className + " ").replace(/[\n\t]/g, " ").indexOf(" active ") > -1 ) //identify the slide with the class "active"
      {
        console.log({slide,index});
        slide.classList.remove("active");//removes the slide with the "active" class slide.
        if(index == 0){ // if the index of the slide is at the end of array
          targetindex = len - 1;  // set the next active slide's index to 0
        }
        else {
          targetindex = index - 1; // else add 1 to the index so it can go upwards the slides.
        }
        
      }
    })

    this.state.slides[targetindex].classList.add("active");// add "active" class to the next slide
    this.state.slides[targetindex].classList.remove("hide");// remove the "hide" class to the next slide.
  }

  render() {
    return template.call(this);
  }
}

export default Slider;
