import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/35d70aa9-e830-4e46-80eb-bdeca5da7e60/L1057171_01.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6465ed6d-8208-4c94-bef6-a3d3f976d237/VIKS1277.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c193cf95-d27f-4f13-8741-96d386ac3cbf/VIKS1260.jpg?content-type=image%2Fjpeg",

]
 
class Eden
 extends Component {
  render() {
    return (
	    <div>
	        <Carousel>
          {imgs.map(image => (
            // <Carousel.Item>
              <img className="d-block w-100 scrolldown-img" src={image} alt="" />
            // </Carousel.Item>
          ))}         
        </Carousel>
		</div>
    );
  }
}
 
export default Eden
;