import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/cc4dd351-c1e5-47e9-beed-997bef749647/Black+Paintings_01.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/dcab4599-311c-4e8b-bae0-c03d9b1cad8e/Black+Paintings_02.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9d3676f4-bbff-4c16-9cba-4448e135cd79/Black+Paintings_03.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/863e6e65-43da-4c07-b28b-4ab3cf839c1b/Black+Paintings_04.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/05e8ca7d-240d-416c-b100-5b7d3f0b3ebe/Black+Paintings_05.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/190ca95d-f17f-45e0-a468-305aac78fb6a/Black+Paintings_06.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/4cfeaaac-8c64-4cab-8f2b-d1760a3158db/Black+Paintings_07.jpg?content-type=image%2Fjpeg",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/f4ba96c8-19ec-402e-8cf3-2529276ae367/Black+Paintings_08.jpg?content-type=image%2Fjpeg",
] 
class BlackPaintings extends Component {
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

    if (isMobile) {
      return (
        <div className="black-paintings-mobile">
          {imgs.map((image, index) => (
            <div key={index}>
              <img className="d-block w-100" src={`${image}${formatParam}`} alt="" />
            </div>
          ))}
        </div>
      );
    }

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
 
export default BlackPaintings
;