import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0d4d0c4d-3592-4947-93cd-163b9288bfcf/1756595697813-c13e4d5e-f762-4dfd-aacd-2b797024b29e_1.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/df1ae534-a29d-4220-8974-1ce7b080214f/1756595697813-c13e4d5e-f762-4dfd-aacd-2b797024b29e_2.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/af4bb51c-52cc-4da2-a3ba-27bfaa6b48e2/1756595697813-c13e4d5e-f762-4dfd-aacd-2b797024b29e_3.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ea966199-3440-4e59-bf57-76c8f6a6e76c/1756595697813-c13e4d5e-f762-4dfd-aacd-2b797024b29e_4.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/3b01a987-aecf-4dfa-923c-c5ecff49a242/1756595697813-c13e4d5e-f762-4dfd-aacd-2b797024b29e_5.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/50e0ddad-a77d-4da3-971c-e8615ad4a7c3/1756595697813-c13e4d5e-f762-4dfd-aacd-2b797024b29e_6.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/7dc99ae3-7a3a-4080-af7f-e00a23707f43/1756595697813-c13e4d5e-f762-4dfd-aacd-2b797024b29e_7.png?content-type=image%2Fpng",
    ] 
class BlackPaintings
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
 
export default BlackPaintings
;