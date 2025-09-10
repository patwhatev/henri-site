import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from "react";

const imgs_old = [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe4379967c1670297d4b/1570504284199/IMG_6044.TIF.png?format=2500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeae9d666c083dbc529d/1570504381169/IMG_6043.jpg.png?format=2500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeb47161583d7ba1033c/1570504387810/IMG_6042.jpg.png?format=2500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfeb47161583d7ba1033c/1570504387810/IMG_6042.jpg.png?format=2500w"
];

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d2120b41-4bdb-4306-abb5-31fbefd9f5a4/CornerChair1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e87d6ba6-46c3-467a-8536-7b8ee859857f/CornerChair2.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0271cde4-e834-431f-85e4-00ac6aad5f62/SingleCrossChair1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c2362228-3492-4f2b-af70-e142514c29f8/SingleCrossChair2.png?content-type=image%2Fpng"
];

class ChaiseManteau
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
 
export default ChaiseManteau
;