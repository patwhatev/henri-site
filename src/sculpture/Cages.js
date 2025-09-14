import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const imgs = [
      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/6b9706da-22a3-448c-8fc3-d1271af81820/print0001.jpg?content-type=image%2Fjpeg",
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
          {imgs.map((image, index) => {
            const fullImageUrl = `${image}${formatParam}`;
            const isLoaded = loadedImages.has(fullImageUrl);
            return (
              <div className="image-container" key={index}>
                <img
                  className={`d-block w-100 ${isLoaded ? 'loaded' : 'loading'}`}
                  src={fullImageUrl}
                  alt=""
                  onLoad={() => this.handleImageLoad(fullImageUrl)}
                />
              </div>
            );
          })}
      </div>
    );
  }
}
 
export default Cages
;