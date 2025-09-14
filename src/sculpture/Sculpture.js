import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import SculptureNav from "./SculptureNav";
import Chaises from "./Chaises";
import Objekt from "./Objekt";
import SynthesizerPrisonUnit from "./SynthesizerPrisonUnit";
import NarcanCar from "./NarcanCar";
import Cages from "./Cages";

const landingImage = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/72fa5371-205e-4d66-9711-db4c45d75a53/print0001.jpg?content-type=image%2Fjpeg";

class Sculpture extends Component {
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
        <SculptureNav/>
        
        <Routes>
          {/* Landing page route - shows when at /sculpture exactly */}
          <Route index element={(
            <div>
              <img className="d-block w-100" src={`${landingImage}${formatParam}`} alt="Sculpture landing image" />
            </div>
          )} />
          
          {/* Sub-page routes - show carousels without landing image */}
          <Route path="cages" element={<Cages />} />
          <Route path="objekt" element={<Objekt />} />
          <Route path="narcan-car" element={<NarcanCar />} />
          <Route path="synthesizer-prison-unit" element={<SynthesizerPrisonUnit />} />
          <Route path="chaises" element={<Chaises />} />
        </Routes>
      </div>
    );
  }
}

export default Sculpture;
