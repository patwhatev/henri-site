import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe963dc97713cd090190/1570504355377/henr486-023.tif.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe837161583d7ba0feb3/1570504335933/henr486-028.tif.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe7a891ec13e8f7d9dd9/1570504328829/henr486-025.tif.png?format=1500w",
]
 
class Eden
 extends Component {
  render() {
    return (
	    <div>
        <h1>RENDER TEST</h1>
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
 
export default Eden
;