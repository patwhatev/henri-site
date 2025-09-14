import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/d2120b41-4bdb-4306-abb5-31fbefd9f5a4/CornerChair1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/e87d6ba6-46c3-467a-8536-7b8ee859857f/CornerChair2.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/0271cde4-e834-431f-85e4-00ac6aad5f62/SingleCrossChair1.png?content-type=image%2Fpng",
  "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/c2362228-3492-4f2b-af70-e142514c29f8/SingleCrossChair2.png?content-type=image%2Fpng"
];

class Chaises extends Component {
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
                <div className="image-container">
                  <img
                    className={`chaises d-block w-100 ${isLoaded ? 'loaded' : 'loading'}`}
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
 
export default Chaises
;