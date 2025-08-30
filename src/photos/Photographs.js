import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'


const metal_show = [
	"https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da67b599033071d0cf49c46/1571191649561/IMG_5432.TIF.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee4fd1c0ab7b9e6918d0/1573449379225/IMG_5430.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee4fb4679c4cebfd5793/1573449942112/IMG_5435.jpg.png?format=1500w",
  "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5dc8ee7dac6af558c0d2af29/1573449942128/IMG_5437.png?format=1500w"
]

const perris = [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfea63dc97713cd0902bc/1570504369603/IMG_4252.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfebb18af836bfce968db/1570504389492/IMG_4251.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfea018af836bfce96563/1570504363436/WEBSITE+COVER+PHOTO.TIF-7.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe732da89a7537538481/1570504321300/IMG_4249.TIF.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe6b3dc97713cd08fd95/1570504308749/WEBSITE+COVER+PHOTO.TIF-10.png?format=1500w",
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5d9bfe1d891ec13e8f7d9642/5d9bfe587107a66f2b9fb181/1570504290704/IMG_4139.TIF.png?format=1500w"
]

const imgs = [metal_show, perris]
// Note - this page does not have a nav

class Photographs
 extends Component {
  render() {
    const allImages = imgs.flat();
    return (
      <div className="content">
        <div>
        <Carousel>
          {allImages.map(image => (
            // <Carousel.Item>
              <img className="d-block w-100 scrolldown-img" src={image} alt="" />
            // </Carousel.Item>
          ))}         
        </Carousel>
      </div>
      </div>
    );
  }
}
 
export default Photographs
;