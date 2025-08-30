import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PaperNav from "./PaperNav";
import Paper2016to2020 from "./2016-2020";
import Paper2021to2025 from "./2021-2025";

const landingImage = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/5aec9d22-c71c-4201-b2cc-e13cff0e4051/VIKS1213.jpg?content-type=image%2Fjpeg";


class Paper
 extends Component {
  render() {
    return (
      <div className="content">
        <PaperNav/>
        
        <Switch>
          {/* Landing page route - shows when at /paper exactly */}
          <Route exact path="/paper" render={() => (
            <div>
              <img className="d-block w-100" src={landingImage} alt="Paper landing image" />
            </div>
          )} />
          
          {/* Sub-page routes - show carousels without landing image */}
          <Route path="/paper/2016-2020" component={Paper2016to2020} />
          <Route path="/paper/2021-2025" component={Paper2021to2025} />
          {/* Add more sub-routes as needed */}
        </Switch>
      </div>
    );
  }
}
 
export default Paper
;