import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import PaperNav from "./PaperNav";
import Paper2016to2019 from "./2016-2019";
import Paper2021to2025 from "./2021-2025";

const landingImage =      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/9e9f99d8-1634-465a-a03c-1bd5f44a0770/New+Paper_01.jpg?content-type=image%2Fjpeg";


class Paper extends Component {
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
      <div className="content">
        <PaperNav/>
        
        <Routes>
          {/* Landing page route - shows when at /paper exactly */}
          <Route index element={(
            <div className="paper-21">
              <div className="image-container">
                <img
                  className={`d-block w-100 ${loadedImages.has(`${landingImage}${formatParam}`) ? 'loaded' : 'loading'}`}
                  src={`${landingImage}${formatParam}`}
                  alt="Paper landing image"
                  onLoad={() => this.handleImageLoad(`${landingImage}${formatParam}`)}
                />
              </div>
            </div>
          )} />
          
          {/* Sub-page routes - show carousels without landing image */}
          <Route path="2016-2019" element={<Paper2016to2019 />} />
          <Route path="2021-2025" element={<Paper2021to2025 />} />
          {/* Add more sub-routes as needed */}
        </Routes>
      </div>
    );
  }
}
 
export default Paper
;