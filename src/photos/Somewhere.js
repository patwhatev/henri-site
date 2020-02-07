import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5e3cd50cb5004465df0e1b6e/5e3cd50cbeb2d657db6b2c7a/1581045010612/3.jpg?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5e3cd50cb5004465df0e1b6e/5e3cd510d4ad48682c28fae1/1581045013418/2.jpg?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5e3cd50cb5004465df0e1b6e/5e3cd50c9d7664785e993959/1581045010243/4.jpg?format=1000w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5e3cd50cb5004465df0e1b6e/5e3cd510d4ad48682c28faec/1581045013674/1.jpg?format=1000w"
]
class Somewhere
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
 
export default Somewhere
;