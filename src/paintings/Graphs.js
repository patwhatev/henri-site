import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/073dfd4d-b25d-47c8-a663-a407bc64bcea/1756598137990-c46628b8-5164-46ba-af22-fe3ae5653cc9_1.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/ec796f5a-b001-4c4c-b3b8-b5dafe770e01/1756598137990-c46628b8-5164-46ba-af22-fe3ae5653cc9_2.png?content-type=image%2Fpng",
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c82e8ee3-e124-40ed-93a1-eeae95882685/1756598137990-c46628b8-5164-46ba-af22-fe3ae5653cc9_3.png?content-type=image%2Fpng",
    ] 
class Graphs extends Component {
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
      <Carousel>
          {imgs.map((image, index) => {
            const fullImageUrl = `${image}${formatParam}`;
            const isLoaded = loadedImages.has(fullImageUrl);
            return (
              <Carousel.Item key={index}>
                <div className="image-container">
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
    );
  }
}
 
export default Graphs
;