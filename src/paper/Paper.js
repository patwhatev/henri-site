import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import PaperNav from "./PaperNav";
import Paper2016to2019 from "./2016-2019";
import Paper2021to2025 from "./2021-2025";

const landingImage =      "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/398311c5-eb04-46d6-b1cb-2849773de5e7/1756594677705-565b4606-7959-455d-ab03-e49ce4a84e6c_1.png?content-type=image%2Fpng";


class Paper
 extends Component {
  render() {
    return (
      <div className="content">
        <PaperNav/>
        
        <Routes>
          {/* Landing page route - shows when at /paper exactly */}
          <Route index element={(
            <div className="paper-21">
              <img className="d-block w-100" src={landingImage} alt="Paper landing image" />
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