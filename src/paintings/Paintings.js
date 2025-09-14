import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import PaintingsNav from "./PaintingsNav";
import BlackPaintings from "./BlackPaintings";
import Graphs from "./Graphs";
import Heroin from "./Heroin";
import Paintings2 from "./Paintings2";

const landingImage = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/dcab4599-311c-4e8b-bae0-c03d9b1cad8e/Black+Paintings_02.jpg?content-type=image%2Fjpeg";

class Paintings extends Component {
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
      <div className="content">
        <PaintingsNav/>
        
        <Routes>
          {/* Landing page route - shows when at /paintings exactly */}
          <Route index element={(
            <div>
              <img className="d-block w-100" src={`${landingImage}${formatParam}`} alt="Paintings landing image" />
            </div>
          )} />
          
          {/* Sub-page routes - show carousels without landing image */}
          <Route path="black-paintings" element={<BlackPaintings />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="heroin" element={<Heroin />} />
          <Route path="paintings2" element={<Paintings2 />} />
        </Routes>
      </div>
    );
  }
}

export default Paintings;