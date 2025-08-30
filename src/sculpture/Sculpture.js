import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SculptureNav from "./SculptureNav";
import Chaises from "./Chaises";
import ChaiseManteau from "./ChaiseManteau";
import SynthesizerPrisonUnit from "./SynthesizerPrisonUnit";
import NarcanCar from "./NarcanCar";
import Cages from "./Cages";

const landingImage = "https://images.squarespace-cdn.com/content/53667a41e4b0e77173cb3dd1/72fa5371-205e-4d66-9711-db4c45d75a53/print0001.jpg?content-type=image%2Fjpeg";

class Sculpture extends Component {
  render() {
    return (
      <div className="content">
        <SculptureNav/>
        
        <Switch>
          {/* Landing page route - shows when at /books exactly */}
          <Route exact path="/sculpture" render={() => (
            <div>
              <img className="d-block w-100" src={landingImage} alt="Books landing image" />
            </div>
          )} />
          
          {/* Sub-page routes - show carousels without landing image */}
          <Route path="/sculpture/cages" component={Cages} />
          <Route path="/sculpture/chaises" component={Chaises} />
          <Route path="/sculpture/narcan-car" component={NarcanCar} />
          <Route path="/sculpture/synthesizer-prison-unit" component={SynthesizerPrisonUnit} />
          <Route path="/sculpture/chaise-manteau" component={ChaiseManteau} />
        </Switch>
      </div>
    );
  }
}

export default Sculpture;
