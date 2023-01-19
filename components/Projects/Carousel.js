import React, { Component, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Testimonials from "./testimonials";
import Randoxc from "./Randoxc";
import Image from "next/image";
// import next from "../public/next.png";
// import prev from "../public/prev.png";
import webgl from '../../public/webg.png'

import randox from '../../public/rando.png'
export default class NextJsCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
//   componentDidMount() {
//     fetch("https://globaltechnologia.org/webAdmin/api/testomshow")
//       .then((response) => response.json())
//       .then((data) => this.setState({ data }));
//     console.log("SSS", this.state);
//   }
data = [
    {image:randox ,
     name:"randox", 
     link:""
    },
    {image:webgl ,
      name:"webgl",
      link:""
    }
]

  render() {
    // const { data } = this.state;
   const  data = [
    {image:randox ,
      name:"randox", 
      link:"/Randox"
     },
     {image:webgl ,
       name:"webgl",
       link:""
     }
    ]
    console.log("datassss", data);

    // const arrowStyles = {
    //   position: "absolute",
    //   top: "0",
    //   bottom: "auto",
    //   padding: ".4em",
    //   zIndex: 2,
    //   width: "55px",
    //   height: "100%",
    // };
    return (
      <div>
        <Carousel>
          {data?.map((child, index) => {
            return (
              <Randoxc
                image={child.image}
                link={child.link}
                name = {child.name}
                key={index}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}
