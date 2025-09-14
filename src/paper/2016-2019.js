import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/97711c38-78d4-4300-a122-c591a3e9f67c/Old+Paper_01.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/34d26dd9-c69f-429e-9966-46039c8ea02e/Old+Paper_02.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f7c7f04b-868a-4d32-9190-040c56396699/Old+Paper_03.jpg?content-type=image%2Fjpeg",
  // missing #4
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/1074af75-8d6d-4da1-b3b9-6e6968c52290/Old+Paper_05.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/95d1793f-9bee-4e16-9124-91eee28cc276/Old+Paper_06.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/b44d31a7-ce45-4cee-b9f4-944e92d40f81/Old+Paper_07.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/76e9ded5-ec0b-40ca-b18d-f7ea84340a85/Old+Paper_08.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/62264d55-b4db-4372-82db-a71eae729a77/Old+Paper_09.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/096310fb-47e7-497a-aa41-874c9195d07b/Old+Paper_10.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/385e5cf0-da22-47e5-91e3-5ded0caecdc6/Old+Paper_11.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/df7742d5-9d4f-4384-a9b0-546a1ff3d0cc/Old+Paper_12.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9ed01bc7-bed9-4e4a-a8e2-06ed2c714b33/Old+Paper_13.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2178b36c-553c-4d24-b65c-6146928fcbd9/Old+Paper_14.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ea2d924a-0993-45c1-be69-92aeba597709/Old+Paper_15.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5533771e-5d6b-4ac4-ad1f-10d05455cc5e/Old+Paper_16.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c3d2b5c8-fa16-41d8-bc11-c0485230d23b/Old+Paper_17.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/fe5133da-f03e-426d-9803-6afa812cad6e/Old+Paper_18.jpg?content-type=image%2Fjpeg",
];

class Paper2016to2019
 extends Component {
  render() {
    return (
      <div className='paper-16'>
          {imgs.map(image => (
              <img className="d-block w-100" src={image} alt="" />
          ))}         
      </div>
    );
  }
}
 
export default Paper2016to2019
;