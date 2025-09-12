import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/4b038452-8a7c-4700-8457-93c49250c456/print0009.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6ca19424-7e4e-403b-9384-b712f92679f6/print.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/794e4f9a-02f1-49c0-939d-5bed23807d73/print0001.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5bb47871-8f16-4eec-9c93-0eebefe64ec1/print0004.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/3124ce4a-5ec1-4d30-8432-7ba916c44241/print0006.jpg?content-type=image%2Fjpeg",
  // "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d4c313a2-8d4e-490e-8d72-6803c787719e/print0002.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5e66c9a9-34a6-4173-a2ad-41f3d5ce07d8/print0005.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/3628dab7-79b9-43fb-86dc-b8bd5273e605/print0007.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/56c7f6e5-6fca-4948-926e-36ded0c55eea/print0003.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/247adace-8f2d-4a1f-a5ff-01de323b4c27/print0008.jpg?content-type=image%2Fjpeg",
];

class NarcanCar
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
 
export default NarcanCar
;