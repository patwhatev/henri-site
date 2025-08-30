import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
     "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/1feee706-d45b-4d08-a94f-b822a9d665f5/VIKS1177-2.jpg?content-type=image%2Fjpeg"
] 
class Paper2021to2025
 extends Component {
  render() {
    return (
      <div>
        <Carousel>
          {imgs.map(image => (
            <Carousel.Item>
              <img className="d-block w-100" src={image} alt="" />
            </Carousel.Item>
          ))}         
        </Carousel>
      </div>
    );
  }
}
 
export default Paper2021to2025
;