import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  'https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/64edb085-85be-4334-97b4-f887fb0760a2/VIKS1198.jpg?content-type=image%2Fjpeg'
];

class Dictatorship extends Component {
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
              <img className="d-block w-100" src={`${image}${formatParam}`} alt="" />
            </Carousel.Item>
          ))}         
        </Carousel>
      </div>
    );
  }
}
 
export default Dictatorship
;