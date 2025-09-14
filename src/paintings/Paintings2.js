import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/8d8784d9-a2e4-482c-9b7f-adfdcb2446a7/1756596105744-6bb84278-6821-4545-8838-7ea614fa3a6d_1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/2fd46325-317f-4b55-8be8-1cdd3629a362/1756596105744-6bb84278-6821-4545-8838-7ea614fa3a6d_2.png?content-type=image%2Fpng",
] 
class Paintings2 extends Component {
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
 
export default Paintings2
;