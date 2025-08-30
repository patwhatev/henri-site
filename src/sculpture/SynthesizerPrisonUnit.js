import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
        "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f7837654-44b1-4b0c-8e1e-5b9061e39276/print+2.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/924dafa3-ae50-45a1-b524-4b7d13bc6a6c/print0004.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/72fa5371-205e-4d66-9711-db4c45d75a53/print0001.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/adfa0348-6330-4c5d-8f42-99c44eaa673b/print0005.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9bb8acf8-4387-421b-8c08-16b372225519/print0003.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f4f833f2-8fdb-4d5f-8514-1dabd371c26a/print0002.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f04ee6c3-aee5-449d-bf6f-0e448a01fdc3/print0006.jpg?content-type=image%2Fjpeg",
];

class SynthesizerPrisonUnit
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
 
export default SynthesizerPrisonUnit
;