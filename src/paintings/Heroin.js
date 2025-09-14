import React, { Component } from "react";

const imgs = [
      "https://static1.squarespace.com/static/5ad4d6c7a2772c84c876a433/5da66f34ffea006e2c4bf640/5da6733345908c2a5e43dba2/1571189570678/DSC_6745.png?format=1500w",
    ] 
class Heroin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedImages: new Set()
    };
  }

  handleImageLoad = (imageUrl) => {
    this.setState(prevState => ({
      loadedImages: new Set(prevState.loadedImages).add(imageUrl)
    }));
  }

  render() {
    const { loadedImages } = this.state;

    return (
      <div>
        {imgs.map((image, index) => {
          const isLoaded = loadedImages.has(image);
          return (
            <div key={index} className="image-container">
              <img
                className={isLoaded ? 'loaded' : 'loading'}
                src={image}
                alt=""
                onLoad={() => this.handleImageLoad(image)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
 
export default Heroin
;