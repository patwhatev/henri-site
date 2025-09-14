import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2be0cfd3-1daa-44b7-bb2e-e15fc616df65/RoseHammer1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/4d019a13-c645-4268-a3df-dca8e050b47f/RoseHammer3.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/cf68daf0-668e-4033-b76e-38f55bae2792/IMG_7628.jpeg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/07dd0896-58e7-47bf-95dd-219fed5068b8/100-440-A.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/3cfe6587-875a-437f-8627-afc4d946a057/100-440-B.png?content-type=image%2Fpng",
];

class Objekt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 400
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 400
    });
  }

  render() {
    const { isMobile } = this.state;
    const formatParam = isMobile ? "?format=100w" : "?format=2500w";

    return (
      <div>
          <Carousel>
          {imgs.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="objekt d-block w-100" src={`${image}${formatParam}`} alt="" />
            </Carousel.Item>
          ))}         
        </Carousel>        
      </div>
    );
  }
}
 
export default Objekt
;