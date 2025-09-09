import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import PaintingsNav from "./PaintingsNav";
import BlackPaintings from "./BlackPaintings";
import Graphs from "./Graphs";
import Heroin from "./Heroin";
import Paintings2 from "./Paintings2";

const landingImage = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/7dc99ae3-7a3a-4080-af7f-e00a23707f43/1756595697813-c13e4d5e-f762-4dfd-aacd-2b797024b29e_7.png?content-type=image%2Fpng";

class Paintings extends Component {
  render() {
    return (
      <div className="content">
        <PaintingsNav/>
        
        <Routes>
          {/* Landing page route - shows when at /paintings exactly */}
          <Route index element={(
            <div>
              <img className="d-block w-100" src={landingImage} alt="Paintings landing image" />
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