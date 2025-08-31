import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ec796f5a-b001-4c4c-b3b8-b5dafe770e01/1756598137990-c46628b8-5164-46ba-af22-fe3ae5653cc9_2.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/073dfd4d-b25d-47c8-a663-a407bc64bcea/1756598137990-c46628b8-5164-46ba-af22-fe3ae5653cc9_1.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c82e8ee3-e124-40ed-93a1-eeae95882685/1756598137990-c46628b8-5164-46ba-af22-fe3ae5653cc9_3.png?content-type=image%2Fpng",
    ] 
class Graphs
 extends Component {
  render() {
    return (
      <Carousel>
          {imgs.map(image => (
            <Carousel.Item>
              <img className="d-block w-100" src={image} alt="" />
            </Carousel.Item>
          ))}         
        </Carousel>
    );
  }
}
 
export default Graphs
;