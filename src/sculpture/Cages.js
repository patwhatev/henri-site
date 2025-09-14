import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'


const imgs = [
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6b9706da-22a3-448c-8fc3-d1271af81820/print0001.jpg?content-type=image%2Fjpeg",
      // "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/dfaee883-d683-47c2-9549-44079e13d6b9/print0002.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/77287f3f-317e-4617-8557-ebbf24853432/print0003+copy.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5a3664bb-220a-4f71-80f6-4990a6ea0546/print0004.jpg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/09b78b36-3b1e-471d-8998-b963f508da49/print0007.jpg?content-type=image%2Fjpeg"
];

class Cages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 400,
      loadedImages: new Set()
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

  handleImageLoad = (imageUrl) => {
    this.setState(prevState => ({
      loadedImages: new Set(prevState.loadedImages).add(imageUrl)
    }));
  }

  render() {
    const { isMobile, loadedImages } = this.state;
    const formatParam = isMobile ? "?format=100w" : "?format=2500w";

    return (
      <div>
          <Carousel>
            {imgs.map((image, index) => {
            const fullImageUrl = `${image}${formatParam}`;
            const isLoaded = loadedImages.has(fullImageUrl);
            return (
              <Carousel.Item key={index}>
                <div className="image-container" key={index}>
                  <img
                  className={`d-block w-100 ${isLoaded ? 'loaded' : 'loading'}`}
                  src={fullImageUrl}
                  alt=""
                  onLoad={() => this.handleImageLoad(fullImageUrl)}
                  />
                </div>
              </Carousel.Item>
            );
          })}
          </Carousel>
      </div>
    );
  }
}
 
export default Cages
;