import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PaintingsNav from "./PaintingsNav";
import BlackPaintings from "./BlackPaintings";
import Graphs from "./Graphs";
import Heroin from "./Heroin";
import Valet from "./Valet";

const landingImage = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/892f38c7-6858-43b0-9ad8-e4c1e2c26260/VIKS1131.jpg?content-type=image%2Fjpeg";

class Paintings extends Component {
  render() {
    return (
      <div className="content">
        <PaintingsNav/>
        
        <Switch>
          {/* Landing page route - shows when at /books exactly */}
          <Route exact path="/paintings" render={() => (
            <div>
              <img className="d-block w-100" src={landingImage} alt="Paintings landing image" />
            </div>
          )} />
          
          {/* Sub-page routes - show carousels without landing image */}
          <Route path="/paintings/black-paintings" component={BlackPaintings} />
          <Route path="/paintings/graphs" component={Graphs} />
          <Route path="/paintings/heroin" component={Heroin} />
          <Route path="/paintings/valet" component={Valet} />
        </Switch>
      </div>
    );
  }
}

export default Paintings;