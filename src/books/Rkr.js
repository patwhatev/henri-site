import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  'https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5c5f8d154785d396610c3b07/5c5f8d326e9a7f5815fc0f1c/1563547665165/henr260-001.tif.png?format=1000w',
  'https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5c5f8d154785d396610c3b07/5c5fc1551905f4fc9c250216/1563547665172/IMG_2399.png?format=1000w',
  'https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5c5f8d154785d396610c3b07/5c5f8d159b747a2840769157/1563547665161/henr260-023.tif.png?format=1000w',
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5c5f8d154785d396610c3b07/5c5f8d45e5e5f0cc9007567e/1563547665168/henr260-022.tif.png?format=1000w",
];

class Rkr
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
 
export default Rkr
;